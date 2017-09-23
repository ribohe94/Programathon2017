class UsersController < ApplicationController
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
    if @user.update_attributes(user_params)
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
end
