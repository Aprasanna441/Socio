from django.db import models

# Create your models here.

from django.contrib.auth.models import BaseUserManager,AbstractBaseUser 



class MyUserManager(BaseUserManager):
    def create_user(self, email,name, password=None,password2=None):
        """
        Creates and saves a User with the given email, name and password.
        """
        if not email:
            raise ValueError("Users must have an email address")

        user = self.model(
            email=self.normalize_email(email),
            name=name
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, name, password=None,password2=None):
        """
        Creates and saves a superuser with the given email, date of
        birth and password.
        """
        user = self.create_user(
            email,
            password=password,
            name=name
        )
        user.is_admin = True
        user.save(using=self._db)
        return user
    



class User(AbstractBaseUser):
    email = models.EmailField(
        verbose_name="email address",
        max_length=255,
        unique=True,
    )
    profile_picture = models.ImageField(upload_to='profile_pics/', blank=True, null=True)
    name=models.CharField(max_length=200)
    date_of_birth = models.DateField(null=True)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    created_at=models.DateTimeField(auto_now_add=True)
    


    objects = MyUserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["name"]

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        # Simplest possible answer: Yes, always
        return True

    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        # Simplest possible answer: Yes, always
        return True

    @property
    def is_staff(self):
        "Is the user a member of staff?"
        # Simplest possible answer: All admins are staff
        return self.is_admin
    
class TaggedUser(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey('Post', on_delete=models.CASCADE)

    def __str__(self):
        return self.user.username

class Post(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    caption=models.TextField()
    image=models.ImageField(upload_to='user_uploads/images/')
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)
    tagged_users = models.ManyToManyField(User, through=TaggedUser, related_name='tagged_posts')

    def __str__(self):
        return  f"{self.user.username}'s Post created at {self.created_at}"







