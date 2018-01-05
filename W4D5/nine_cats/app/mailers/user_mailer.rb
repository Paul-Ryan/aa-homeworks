class UserMailer < ApplicationMailer
  default from: 'example@email.com'

  def welcome_email(user)
    @user = user
    @url = 'www.example.com/login'
    mail(to: user.email, subject: 'Welcome to my site about cats')
  end

end
