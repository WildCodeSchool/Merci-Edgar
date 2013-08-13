class Phone < ActiveRecord::Base
  belongs_to :contact_datum
  attr_accessible :kind, :national_number
  # validates :national_number, :phone => true, :allow_blank => true
  validate :check_number

  attr_writer :national_number

  def internationalize_phone_number(country)
    if country
      c = Country.new(country)
      self.number = Phony.normalize(self.number)
      self.number = "#{c.country_code}#{self.number}" unless self.number.starts_with?(c.country_code)
    end
    self.number = Phony.normalize(self.number)
  end

  def formatted_phone
    Phony.formatted(self.number,:format => :international) unless self.number.blank?
  end

  def national_number
    @national_number || Phony.formatted(self.number,:format => :national) unless self.number.blank?
  end

  def national_number=(n)
    @national_number = n
    self.number = @national_number
  end

  def check_number
    if @national_number.present? && !Phony.plausible?(@national_number)
      errors.add(:national_number, "Wrong phone number")
    end
  end

end
