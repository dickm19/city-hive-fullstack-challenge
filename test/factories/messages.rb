FactoryBot.define do
    factory :message do
        content { "Fixture message" }
        user_id { User.first.id || create(:user).id }
    end
end
