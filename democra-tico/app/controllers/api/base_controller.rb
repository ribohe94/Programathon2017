class Api::BaseController < ApplicationController
  before_action :ensure_and_set_current_user!

  def ensure_and_set_current_user!

    puts params[:email]
  #   if current_user
  #     @current_user = current_user
  #   else
  #     render json: {}, status: :unauthorized
  #   end
  end

  private

  def user
    User.find_by_auth_token request.env[‘HTTP_AUTHORIZATION’]
  end
end
