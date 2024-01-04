from rest_framework import serializers
from User.models import User 
from django.utils.encoding import smart_str,force_bytes,DjangoUnicodeDecodeError
from django.utils.http import urlsafe_base64_decode,urlsafe_base64_encode
from django.contrib.auth.tokens import PasswordResetTokenGenerator

class UserRegistrationSerializer(serializers.ModelSerializer):
    password2=serializers.CharField(style={'input_type':'password'},write_only=True)
    class Meta:
        model=User
        fields=['email','name','password','password2']
        extra_kwargs={
            'password':{'write_only':True}
        }

    
    def validate(self,data):
        password=data['password']
        password2=data['password2']
        if password!=password2:
            raise serializers.ValidationError("Password and Confirm Password didn't match")
        return data
    
    def create(self,validate_data):
        return User.objects.create_user(**validate_data)
   

class UserLoginSerializer(serializers.ModelSerializer):
    email=serializers.EmailField(max_length=255)

    class Meta:
        model=User
        fields=['email','password']


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model=User 
        fields=['email','name','date_of_birth','created_at','profile_picture']


class ChangePasswordSerializer(serializers.Serializer):
    password=serializers.CharField(min_length=8,style={'input_type':'password'},write_only=True)
    password2=serializers.CharField(min_length=8,style={'input_type':'password'},write_only=True)
    class Meta:
        fields=['password','password2']

    def validate(self,attrs):
        password=attrs.get("password")
        password2=attrs.get("password2")
        user=self.context.get("user")
        if password!=password2:
            raise serializers.ValidationError("Password and Confirm password doesnt match")
        user.set_password(password)
        user.save()
        return attrs

class ResetPasswordMailSerializer(serializers.Serializer):
    email=serializers.EmailField(max_length=255)
    class Meta:
        fields=['email']
     
    def validate(self,attrs):
        email=attrs.get("email")
        if  User.objects.filter(email=email):
            user=User.objects.get(email=email)
            uid=urlsafe_base64_encode(force_bytes(user.id))
            token=PasswordResetTokenGenerator().make_token(user)
            link='http://localhost:8000/user/resetpassword/'+uid+'/'+token
            attrs["link"]=link
            
            


            
        else:            
            raise serializers.ValidationError("User doesnt exist with such email")
        return attrs
    

class ResetPasswordSerializer(serializers.Serializer):
    password=serializers.CharField(min_length=8,style={'input_type':'password'},write_only=True)
    password2=serializers.CharField(min_length=8,style={'input_type':'password'},write_only=True)
    class Meta:
        model=User
        fields=['password','password2']

    def validate(self,attrs):
        password=attrs.get("password")
        password2=attrs.get("password2")
        uid=self.context.get("uid")
        token=self.context.get("token")
     
        if password!=password2:
            raise serializers.ValidationError("Password and Confirm password doesnt match")
        id=smart_str(urlsafe_base64_decode(uid))
        user=User.objects.get(id=id)
        if not PasswordResetTokenGenerator().check_token(user,token):
           raise  serializers.ValidationError("Invalid Token")
        

        user.set_password(password)
        user.save()
        return attrs


    


