class CreatePerson < ActiveRecord::Migration[5.2]
  validates :name, presence: true

  def change
    create_table :people do |t|
      t.string :name, null: false
      t.integer :house_id, null: false 
    end
  end
end
