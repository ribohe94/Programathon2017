class User < ApplicationRecord

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable#, :confirmable, :lockable, :timeoutable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable

  USER_TYPES = ['Votante','Administrador']

  validates :email, uniqueness: true, presence: true

  def fetch_auth_token!
    token = SecureRandom.base64(50)
    self.auth_token = token
    self.save!
    self.auth_token
  end

end
