class User
  include Mongoid::Document
  include Mongoid::Timestamps
  include ActiveModel::SecurePassword

  has_secure_password :password
  has_many :messages, dependent: :destroy

  field :username, type: String
  field :password_digest, type: String
  field :phone_number, type: String

  validates :username, presence: true, uniqueness: true
  validates :phone_number, presence: true, uniqueness: true
  validates :password, presence: true, length: { minimum: 8 }
end
