from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from User.models import User,Post


class UserModelAdmin(BaseUserAdmin):
    # The forms to add and change user instances
     # The fields to be used in displaying the User model.
    # These override the definitions on the base UserAdmin
    # that reference specific fields on auth.User.
    list_display = ["id","email", "name","date_of_birth", "is_admin"]
    list_filter = ["is_admin",]
    fieldsets = [
        ('User Credentials', {"fields": ["email", "password"]}),
        ("Personal info", {"fields": ["name","date_of_birth","profile_picture"]}),
        ("Permissions", {"fields": ["is_admin","is_active"]}),
    ]
    # add_fieldsets is not a standard ModelAdmin attribute. UserAdmin
    # overrides get_fieldsets to use this attribute when creating a user.
    add_fieldsets = [
        (
            None,
            {
                "classes": ["wide"],
                "fields": ["profile_picture","email","name", "date_of_birth", "password1", "password2"],
            },
        ),
    ]
    search_fields = ["email","name"]
    ordering = ["email"]
    filter_horizontal = []


# Now register the new UserAdmin...
admin.site.register(User, UserModelAdmin)
admin.site.register(Post)
