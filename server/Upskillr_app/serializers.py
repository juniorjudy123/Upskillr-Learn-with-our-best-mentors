# Upskillr_app/serializers.py
from django.contrib.auth.models import User
from rest_framework import serializers

class UserRegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    confirm_password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'confirm_password']

    def validate(self, data):
        """
        Check if password and confirm_password match.
        """
        if data['password'] != data['confirm_password']:
            raise serializers.ValidationError("Passwords do not match.")
        return data

    def create(self, validated_data):
        """
        Create a new user with the validated data and hashed password.
        """
        password = validated_data.pop('password')
        user = User(**validated_data)
        user.set_password(password)  # Hash password before saving
        user.save()
        return user
