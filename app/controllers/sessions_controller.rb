class SessionsController < ApplicationController
    def is_logged_in?
        if user_signed_in? && current_user
            render json: current_user, serializer: UserSerializer, status: :ok
        else
            render json: false, status: :ok
        end
    end

    def create
        auth = request.env["omniauth.auth"]
        user = User.where(provider: auth["provider"],
                            uid: auth["uid"]).first || User.create_with_omniauth(auth)
        session[:user_id] = user.id
        redirect_to root_url, notice: "Signed in!"
    end

    def login
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, serializer: UserSerializer, status: :ok
        else
            render json: { logged_in: false, error: "Invalid username or password" }, status: :unauthorized
        end
    end

    def destroy
        reset_session
        render json: { message: "Logged out successfully" }, status: :ok
    end
end
