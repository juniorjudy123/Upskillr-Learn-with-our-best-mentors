from django.urls import path
from Accounts_app import views as UserViews




urlpatterns=[
    path('register/',UserViews.RegisterUser.as_view())
    
]