class Api::BaseController < ApplicationController
  before_action :ensure_and_set_current_user!

  def ensure_and_set_current_user!
    Rails.logger.debug params.inspect
    if current_user
       @user = current_user
    end
  end

  private

  def user
    User.find_by_auth_token request.env[‘HTTP_AUTHORIZATION’]
  end
end
