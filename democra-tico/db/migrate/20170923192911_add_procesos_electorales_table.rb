class AddProcesosElectoralesTable < ActiveRecord::Migration[5.0]
  def change
    create_table :proceso_electorals do |t|
        t.string :address
        t.date :fecha_inicio
        t.date :fecha_final

        t.timestamps
    end

    create_table :proceso_electoral_por_users do |t|
        t.integer :user_id
        t.integer :proceso_electoral_id

        t.timestamps
    end
  end
end
