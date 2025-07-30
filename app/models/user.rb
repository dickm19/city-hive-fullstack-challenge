class User
  include Mongoid::Document
  include Mongoid::Timestamps
  has_secure_password :transaction_password
  has_many :messages, dependent: :destroy

  field :username, type: String
  field :password_digest, type: String
end
