class UsersController < ApplicationController
  before_action :set_user, only: %i[ show update destroy ]
  wrap_parameters :user, include: [:username, :password, :phone_number]

  # GET /users/1
  # GET /users/1.json
  def show
    render json: @user, status: :ok
  end

  # POST /users/signup
  # POST /users/signup.json
  def signup
    @user = User.new(user_params)
    if @user.save
      login!
      render json: @user, serializer: UserSerializer, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  # PATCH/PUT /users/1.json
  def update
    if @user.update(user_params)
      render json: @user, status: :ok
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  # DELETE /users/1.json
  def destroy
    @user.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.fetch(:user, {}).permit(:username, :password, :phone_number)
    end
end
