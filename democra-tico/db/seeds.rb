# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user = User.new(
  nombre: 'Satoshi',
  primer_apellido: 'Nakamoto',
  segundo_apellido: 'Pelado',
  email: 'xavier@crservers.com',
  password: '1q2w3e4r',
  password_confirmation: '1q2w3e4r',
  user_type: 'Administrador'
)
user.save!


proceso_electoral = ProcesoElectoral.new(
  address: "0xf28bd05d74fa95c86d7fd914280b6adb33889750",
  fecha_inicio: Date.parse("2017-1-1"),
  fecha_final: Date.parse("2017-10-10")
)
proceso_electoral.save!

proceso_electoral_por_user = ProcesoElectoralPorUser.new(
  user_id: 1,
  proceso_electoral_id: 1,
)
proceso_electoral_por_user.save!
