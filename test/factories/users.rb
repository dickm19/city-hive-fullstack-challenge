FactoryBot.define do
  factory :user do
    # Add fields as needed, for example:
    username { FFaker::Internet.user_name }
    phone_number { FFaker::PhoneNumber.phone_number }
    password { FFaker::Internet.password }
  end
end
