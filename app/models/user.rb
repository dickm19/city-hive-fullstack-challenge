class User
  include Mongoid::Document
  include Mongoid::Timestamps
  include ActiveModel::SecurePassword

  has_secure_password :password
  has_many :messages, dependent: :destroy

  field :username, type: String
  field :password_digest, type: String
  field :phone_number, type: String
end
