# config/initializers/recaptcha.rb
Recaptcha.configure do |config|
  config.site_key  = '6LdoxjEUAAAAAFYS-hH9VgOsoY6U13z3_6x1KEJL'
  config.secret_key = '6LdoxjEUAAAAAAliTSALN6EbYN_yIVCp-7gUc_VV'
  # Uncomment the following line if you are using a proxy server:
  # config.proxy = 'http://myproxy.com.au:8080'
end
