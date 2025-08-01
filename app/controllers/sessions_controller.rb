class SessionsController < ApplicationController

    def is_logged_in?
        if user_signed_in? && current_user
            render json: { logged_in: true, user: current_user }, status: :ok
        else
            render json: { logged_in: false }, status: :ok
        end
    end

    def create
        auth = request.env["omniauth.auth"]
        user = User.where(:provider => auth['provider'],
                            :uid => auth['uid']).first || User.create_with_omniauth(auth)
        session[:user_id] = user.id
        redirect_to root_url, :notice => "Signed in!"
    end

    def destroy
        reset_session
        redirect_to root_url, :notice => 'Signed out!'
    end

    def new
        redirect_to '/auth/identity'
    end

    def failure
        redirect_to root_url, :alert => "Authentication error: #{params[:message].humanize}"
    end
end
