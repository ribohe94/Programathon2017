class Api::AuthenticationController < Api::BaseController

  def create
    if user && user.valid_password?(params[:password])
      render json: { token: user.fetch_auth_token! }, status: :ok
    else
      render json: {}, status: :unauthorized
    end
  end

  private

  def user
    @user ||= User.find_by_email params[:email]
  end
end
