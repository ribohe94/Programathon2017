class UsersController < ApplicationController
  prepend_before_action :check_captcha, only: [:create] # Change this to be any actions you want to protect.
  before_action :authenticate_user!

  def index
    @users = User.all
  end

  def show
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    if verify_recaptcha(model: @user) && @user.update_attributes(user_params)
      redirect_to users_path
    else
      render 'edit'
    end
  end

  def new
  end

  def create

  end

  def destroy
    @user = User.find(params[:id])

    sql = "SELECT COUNT(*) as 'procesos' FROM proceso_electoral_por_users a,(SELECT * FROM proceso_electorals WHERE  fecha_final >= datetime('now'))b
WHERE a.proceso_electoral_id = b.id AND a.user_id = " +  @user.id.to_s + ";"
    procesos_pendientes = ActiveRecord::Base.connection.execute(sql)
    puts procesos_pendientes
    if (procesos_pendientes == [{"procesos"=>0, 0=>0}])
      @user.destroy
      redirect_to users_path
    else
      flash[:alert] = "No se puede borrar este usuario tiene procesos electorales pendientes."
      redirect_to users_path
    end
  end

  private
    def user_params
      params.require(:user).permit(:email, :nombre, :primer_apellido, :segundo_apellido)
    end

    def check_captcha
      unless verify_recaptcha
        self.resource = resource_class.new sign_up_params
        resource.validate # Look for any other validation errors besides Recaptcha
        respond_with_navigational(resource) { render :new }
      end
    end
end
