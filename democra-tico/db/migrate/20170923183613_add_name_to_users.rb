class AddNameToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :nombre, :string
    add_column :users, :primer_apellido, :string
    add_column :users, :segundo_apellido, :string
  end
end
