class MessageSerializer < ActiveModel::Serializer
  attributes :id, :sent_at, :content, :formatted_phone_number

  def sent_at
    date = object.created_at.utc.strftime("%A, %d-%b-%y %H:%M:%S %Z")
  end

  def formatted_phone_number
    phone = Phonelib.parse(object.recipient_number)
    phone.national
  end
end
