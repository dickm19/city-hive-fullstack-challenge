FactoryBot.define do
    factory :message do
        content { "Fixture message" }
        association :user
    end
end