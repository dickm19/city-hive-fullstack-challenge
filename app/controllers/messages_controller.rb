require 'twilio-ruby'

class MessagesController < ApplicationController
  before_action :set_message, only: %i[ show update destroy ]

  # GET /messages
  # GET /messages.json
  def index
    if current_user
      @messages = Message.where(user_id: current_user.id).order(created_at: :desc)
      render json: @messages, each_serializer: MessageSerializer, status: :ok
    else
      render json: {}, status: :ok
    end
  end

  # GET /messages/1
  # GET /messages/1.json
  def show
    render json: @message, serializer: MessageSerializer, status: :ok
  end

  # POST /messages
  # POST /messages.json
  def send_message
    @message = Message.new(message_params.merge(user_id: current_user.id))
    if @message.save
      @client = Twilio::REST::Client.new(ENV['TWILIO_ACCOUNT_SID'], ENV['TWILIO_AUTH_TOKEN'])
      message = @client.messages.create(
        body: @message.content,
        from: '+18332453640',
        to: '+18777804236'
      )
      render json: @message, serializer: MessageSerializer, status: :created
    else
      render json: @message.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /messages/1
  # PATCH/PUT /messages/1.json
  def update
    if @message.update(message_params)
      render json: @message, status: :ok
    else
      render json: @message.errors, status: :unprocessable_entity
    end
  end

  # DELETE /messages/1
  # DELETE /messages/1.json
  def destroy
    @message.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_message
      @message = Message.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def message_params
      params.fetch(:message, {}).permit(:content, :recipient_number)
    end
end
