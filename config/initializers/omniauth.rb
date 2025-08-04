Rails.application.config.middleware.use OmniAuth::Builder do
    provider :identity, :fields => [ :name, :phone_number ]
