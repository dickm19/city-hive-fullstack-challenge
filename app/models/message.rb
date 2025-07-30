class Message
  include Mongoid::Document
  include Mongoid::Timestamps

  field :content, type: String
  belongs_to :user, dependent: :destroy
end
