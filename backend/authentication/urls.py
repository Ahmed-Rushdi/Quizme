# from django.urls import path
# from .views import RegisterView, LoginView, LogoutView

# urlpatterns = [
#     path('register/', RegisterView.as_view(), name='register'),
#     path('login/', LoginView.as_view(), name='login'),
#     path('logout/', LogoutView.as_view(), name='logout'),
# ]
from django.urls import path
from .views import (
    UserRegistrationAPIView,
    UserLoginAPIView,
    UserLogoutAPIView,
    CustomTokenRefreshView
    
)

urlpatterns = [
    path('register/', UserRegistrationAPIView.as_view(), name='register'),
    path('login/', UserLoginAPIView.as_view(), name='login'),
    path('logout/', UserLogoutAPIView.as_view(), name='logout'),
        path('token/refresh/', CustomTokenRefreshView.as_view(), name='token_refresh'),

    
]
