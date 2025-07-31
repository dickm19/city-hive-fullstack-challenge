class User
  include Mongoid::Document
  include Mongoid::Timestamps
  include ActiveModel::SecurePassword

  has_secure_password :password
  has_many :messages, dependent: :destroy

  field :username, type: String
  field :password_digest, type: String
  field :phone_number, type: String
  field provider: String
  field uid: String

  validates :username, presence: true, uniqueness: true
  validates :phone_number, presence: true, uniqueness: true, phone: true
  validates :password, presence: true, length: { minimum: 8 }

  def self.create_with_omniauth(auth)
    create! do |user|
      user.provider = auth['provider']
      user.uid = auth['uid']
      if auth['info']
        user.name = auth['info']['name'] || ""
        user.phone_number = auth['info']['phone_number'] || ""
      end
    end
  end
end
