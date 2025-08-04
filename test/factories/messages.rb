FactoryBot.define do
    factory :message do
        content { "Fixture message" }
        recipient_number { FFaker::PhoneNumber.short_phone_number }
        user_id { User.first&.id || create(:user).id }
    end
end
