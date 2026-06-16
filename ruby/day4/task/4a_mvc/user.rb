class User < ApplicationRecord
  has_many :posts, foreign_key: :creator_id, inverse_of: :creator, dependent: :destroy

  has_many :editorships, foreign_key: :editor_id, dependent: :destroy
  has_many :edited_posts, through: :editorships, source: :post
end
