class Post < ApplicationRecord
  belongs_to :creator, class_name: "User"

  has_many :editorships, dependent: :destroy
  has_many :editors, through: :editorships, source: :editor
end
