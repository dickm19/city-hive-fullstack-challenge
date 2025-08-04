class Message
  include Mongoid::Document
  include Mongoid::Timestamps

  field :content, type: String
  field :recipient_number, type: String
  belongs_to :user

  validates :content, presence: true
  validates :recipient_number, presence: true, phone: true
  validates :user, presence: true
end
