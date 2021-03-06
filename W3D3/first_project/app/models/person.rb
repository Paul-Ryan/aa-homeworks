# == Schema Information
#
# Table name: people
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  house_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Person < ApplicationRecord
  validates :name, :house_id, presence: true
  
end
