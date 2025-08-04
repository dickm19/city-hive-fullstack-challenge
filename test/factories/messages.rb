FactoryBot.define do
    factory :message do
        content { "Fixture message" }
        recipient_number { FFaker::PhoneNumber.short_phone_number }
        association :user
    end
end
