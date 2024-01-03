from rest_framework import serializers
from User.models import User 

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


    


