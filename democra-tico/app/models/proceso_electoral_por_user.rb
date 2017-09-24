class ProcesoElectoralPorUser < ApplicationRecord
  has_many :users
  has_many :procesos_electrorales
end
