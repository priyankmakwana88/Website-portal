var billers=[
    {
        "objectid": "biller",
        "billerid": "TATAPWR00MUM01",
        "biller_legal_name": "Tata Power Limited - Mumbai",
        "biller_name": "Tata Power - Mumbai",
        "biller_location": "Mumbai",
        "biller_category": "Electricity",
        "biller_reg_address": "Bombay House, 24, Homi Modi Street",
        "biller_reg_city": "Mumbai",
        "biller_reg_pin": "400001",
        "biller_reg_state": "Maharashtra",
        "biller_reg_country": "India",
        "biller_mode": "ONLINE",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Consumer Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{12}$",
                "error_message": "Please enter a valid 12 digits Consumer Number (eg. 900000342220)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/TATAPWR00MUM01.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/TATAPWR00MUM01.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "Y",
        "isbillerbbps": "Y",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "VODA00000NAT01",
        "biller_legal_name": "Vodafone India Limited - Postpaid",
        "biller_name": "Vodafone Postpaid",
        "biller_location": "National",
        "biller_category": "Mobile Postpaid",
        "biller_reg_address": "Peninsula Corporate Park, Ganpatrao Kadam Marg, Lower Parel",
        "biller_reg_city": "Mumbai",
        "biller_reg_pin": "400013",
        "biller_reg_state": "Maharashtra",
        "biller_reg_country": "India",
        "biller_mode": "ONLINE",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "1000000.00"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "1000000.00"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "1000000.00"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "1000000.00"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "1000000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "1000000.00"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "1000000.00"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "1000000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "1000000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "1000000.00"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "1000000.00"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Mobile Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[1-9]{1}[0-9]{9}$",
                "error_message": "Please enter a valid 10 digit Mobile Number (eg. 9322344261)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/VODA00000NAT01.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/VODA00000NAT01.gif",
        "biller_type": "BOTH",
        "partial_pay": "Y",
        "pay_after_duedate": "Y",
        "online_validation": "Y",
        "isbillerbbps": "Y",
        "paymentamount_validation": "N",
        "bbps_billerid": "VODA00000NAT01"
    },
    {
        "objectid": "biller",
        "billerid": "TORR00000BHW03",
        "biller_legal_name": "Torrent Power Limited - Bhiwandi",
        "biller_name": "Torrent Power - Bhiwandi",
        "biller_location": "Bhiwandi",
        "biller_category": "Electricity",
        "biller_reg_address": "Torrent House, Off Ashram Road",
        "biller_reg_city": "Ahmedabad",
        "biller_reg_pin": "380009",
        "biller_reg_state": "Gujarat",
        "biller_reg_country": "India",
        "biller_mode": "OFFLINEA",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Service Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{1,15}$",
                "error_message": "Please enter a valid Service Number that is a maximum of 20 digits (eg. 13012436241)",
                "seq": "1"
            },
            {
                "parameter_name": "City",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^(Bhiwandi)$",
                "error_message": "Please enter valid city name (eg. Bhiwandi)",
                "seq": "2"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/TORR00000BHW03.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/TORR00000BHW03.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "Y",
        "isbillerbbps": "Y",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "TORR00000SUR04",
        "biller_legal_name": "Torrent Power Limited - Surat",
        "biller_name": "Torrent Power - Surat",
        "biller_location": "Surat",
        "biller_category": "Electricity",
        "biller_reg_address": "Torrent House, Off Ashram Road",
        "biller_reg_city": "Ahmedabad",
        "biller_reg_pin": "380009",
        "biller_reg_state": "Gujarat",
        "biller_reg_country": "India",
        "biller_mode": "OFFLINEA",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Service Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{1,15}$",
                "error_message": "Please enter a valid Service Number that is a maximum of 20 digits (eg. 500535915)",
                "seq": "1"
            },
            {
                "parameter_name": "City",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^(Surat)$",
                "error_message": "Please enter valid city name (eg. Surat)",
                "seq": "2"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/TORR00000SUR04.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/TORR00000SUR04.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "Y",
        "isbillerbbps": "Y",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "BESLOB000BRT01",
        "biller_legal_name": "Bharatpur Electricity Services Limited",
        "biller_name": "Bharatpur Electricity Services (BESL)",
        "biller_location": "Rajasthan",
        "biller_category": "Electricity",
        "biller_reg_address": "R K Complex, Station Road, Nai Mandi, Bharatpur",
        "biller_reg_city": "Bharatpur",
        "biller_reg_pin": "321001",
        "biller_reg_state": "Rajasthan",
        "biller_reg_country": "India",
        "biller_mode": "ONLINE",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "K Number",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[0-9A-Za-z]{12}$",
                "error_message": "Please enter a valid 12 digit K Number (eg. 214567892560)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/BESLOB000BRT01.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/BESLOB000BRT01.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "Y",
        "online_validation": "Y",
        "isbillerbbps": "Y",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "BKESL0000BKR01",
        "biller_legal_name": "Bikaner Electricity Supply Limited",
        "biller_name": "Bikaner Electricity Supply Limited (BKESL)",
        "biller_location": "Bikaner",
        "biller_category": "Electricity",
        "biller_reg_address": "CESC House, Chowringhee Square",
        "biller_reg_city": "Kolkata",
        "biller_reg_pin": "700001",
        "biller_reg_state": "West Bengal",
        "biller_reg_country": "India",
        "biller_mode": "ONLINE",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "K Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{12}$",
                "error_message": "Please enter a valid 12 digit K Number (eg. 310116014521)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/BKESL0000BKR01.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/BKESL0000BKR01.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "Y",
        "online_validation": "Y",
        "isbillerbbps": "Y",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "CONBB0000PUN01",
        "biller_legal_name": "Connect Broadband",
        "biller_name": "Connect Broadband",
        "biller_location": "Punjab",
        "biller_category": "Broadband Postpaid",
        "biller_reg_address": "B-71, Industrial Area, Phase 7, Sahibzada Ajit Singh Nagar",
        "biller_reg_city": "Mohali",
        "biller_reg_pin": "160055",
        "biller_reg_state": "Punjab",
        "biller_reg_country": "India",
        "biller_mode": "ONLINE",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "100.00",
                "max_limit": "9999.00"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "100.00",
                "max_limit": "9999.00"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "100.00",
                "max_limit": "9999.00"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "100.00",
                "max_limit": "9999.00"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "100.00",
                "max_limit": "9999.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "100.00",
                "max_limit": "9999.00"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "100.00",
                "max_limit": "9999.00"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "100.00",
                "max_limit": "9999.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "100.00",
                "max_limit": "9999.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "100.00",
                "max_limit": "9999.00"
            },
            {
                "payment_channel": "POS",
                "min_limit": "100.00",
                "max_limit": "9999.00"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Directory Number",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[0-9a-zA-Z]{4,11}$",
                "error_message": "Please enter a valid Directory Number between 4 to 11 characters (eg. 1725077540)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/CONBB0000PUN01.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/CONBB0000PUN01.gif",
        "biller_type": "BILLER",
        "partial_pay": "Y",
        "pay_after_duedate": "Y",
        "online_validation": "Y",
        "isbillerbbps": "Y",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "DLJB00000DEL01",
        "biller_legal_name": "Delhi Jal Board",
        "biller_name": "Delhi Jal Board",
        "biller_location": "Delhi",
        "biller_category": "Water",
        "biller_reg_address": "Varunalaya Phase 2, Karol Bagh",
        "biller_reg_city": "New Delhi",
        "biller_reg_pin": "110005",
        "biller_reg_state": "Delhi",
        "biller_reg_country": "India",
        "biller_mode": "ONLINE",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "K No",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{10}$",
                "error_message": "Please enter a valid 10 digit K No (eg. 1287545712)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/DLJB00000DEL01.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/DLJB00000DEL01.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "Y",
        "online_validation": "Y",
        "isbillerbbps": "Y",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "IPCL00000BIH01",
        "biller_legal_name": "India Power Corporation Limited - Bihar",
        "biller_name": "IPCL - Bihar",
        "biller_location": "Bihar",
        "biller_category": "Electricity",
        "biller_reg_address": "Plot X 1,2&3, Block EP, Sector-V, Salt Lake, North 24 Paraganas",
        "biller_reg_city": "Kolkata",
        "biller_reg_pin": "700091",
        "biller_reg_state": "West Bengal",
        "biller_reg_country": "India",
        "biller_mode": "ONLINE",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Consumer Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{10,12}$",
                "error_message": "Please enter a valid Consumer Number between 10 to 12 digits (eg. 100573150004)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/IPCL00000BIH01.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/IPCL00000BIH01.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "Y",
        "online_validation": "Y",
        "isbillerbbps": "Y",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "IPCL00000WBL02",
        "biller_legal_name": "India Power Corporation Limited - West Bengal",
        "biller_name": "IPCL - West Bengal",
        "biller_location": "West Bengal",
        "biller_category": "Electricity",
        "biller_reg_address": "Plot X 1,2&3, Block EP, Sector-V, Salt Lake, North 24 Paraganas",
        "biller_reg_city": "Kolkata",
        "biller_reg_pin": "700091",
        "biller_reg_state": "West Bengal",
        "biller_reg_country": "India",
        "biller_mode": "ONLINE",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Consumer Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{10,12}$",
                "error_message": "Please enter a valid Consumer Number between 10 to 12 digits (eg. 100573150004)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/IPCL00000WBL02.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/IPCL00000WBL02.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "Y",
        "online_validation": "Y",
        "isbillerbbps": "Y",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "MPDC00000MEG01",
        "biller_legal_name": "Meghalaya Power Distribution Corporation Limited",
        "biller_name": "Meghalaya Power",
        "biller_location": "Meghalaya",
        "biller_category": "Electricity",
        "biller_reg_address": "Lum Jingshai, Short Round Road, East Khasi Hills",
        "biller_reg_city": "Shillong",
        "biller_reg_pin": "793001",
        "biller_reg_state": "Meghalaya",
        "biller_reg_country": "India",
        "biller_mode": "ONLINE",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Consumer ID",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{1,12}$",
                "error_message": "Please enter a valid Consumer ID that is a maximum of 12 digits (eg. 52000076493)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/MPDC00000MEG01.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/MPDC00000MEG01.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "Y",
        "online_validation": "Y",
        "isbillerbbps": "Y",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "SITI00000UTP03",
        "biller_legal_name": "Siti Energy Limited - Uttar Pradesh",
        "biller_name": "Siti Energy - Uttar Pradesh",
        "biller_location": "Uttar Pradesh",
        "biller_category": "Gas",
        "biller_reg_address": "LGF-10 Vasant Square, Plot-A Sector-B, Pocket-V, Vasant Kunj",
        "biller_reg_city": "New Delhi",
        "biller_reg_pin": "110070",
        "biller_reg_state": "Delhi",
        "biller_reg_country": "India",
        "biller_mode": "OFFLINEA",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "ARN Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{7,9}$",
                "error_message": "Please enter a valid ARN Number that is between 7 to 9 digits (eg. 2000462)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/SITI00000UTP03.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/SITI00000UTP03.gif",
        "biller_type": "BILLER",
        "partial_pay": "Y",
        "pay_after_duedate": "Y",
        "online_validation": "Y",
        "isbillerbbps": "Y",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "TATAPWR00DEL01",
        "biller_legal_name": "Tata Power Limited - Delhi",
        "biller_name": "Tata Power - Delhi",
        "biller_location": "Delhi",
        "biller_category": "Electricity",
        "biller_reg_address": "NDPL House, Hudson Lines, Kingsway Camp",
        "biller_reg_city": "New Delhi",
        "biller_reg_pin": "110009",
        "biller_reg_state": "Delhi",
        "biller_reg_country": "India",
        "biller_mode": "ONLINE",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "CA Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{11,12}$",
                "error_message": "Please enter a valid CA Number starting with 6 or 06 and that is either 11 or 12 digits (eg. 60000121701)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/TATAPWR00DEL01.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/TATAPWR00DEL01.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "Y",
        "online_validation": "Y",
        "isbillerbbps": "Y",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "TATASKY00NAT01",
        "biller_legal_name": "Tata Sky Limited",
        "biller_name": "Tata Sky",
        "biller_location": "National",
        "biller_category": "DTH",
        "biller_reg_address": "3rd Floor, C-1, Wadia International Centre (Bombay Dyeing), Pandurang Budhkar Marg, Worli",
        "biller_reg_city": "Mumbai",
        "biller_reg_pin": "400025",
        "biller_reg_state": "Maharashtra",
        "biller_reg_country": "India",
        "biller_mode": "ONLINE",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "20.00",
                "max_limit": "30000.00"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "20.00",
                "max_limit": "30000.00"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "20.00",
                "max_limit": "30000.00"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "20.00",
                "max_limit": "30000.00"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "20.00",
                "max_limit": "30000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "20.00",
                "max_limit": "30000.00"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "20.00",
                "max_limit": "30000.00"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "20.00",
                "max_limit": "30000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "20.00",
                "max_limit": "30000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "20.00",
                "max_limit": "30000.00"
            },
            {
                "payment_channel": "POS",
                "min_limit": "20.00",
                "max_limit": "30000.00"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Subscriber Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{10,11}$",
                "error_message": "Enter your registered Mobile no. with Tata Sky or a valid Subscriber ID which starts with 1 and is 10 digits long. To locate your subscriber ID, press the home button on remote.",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/TATASKY00NAT01.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/TATASKY00NAT01.gif",
        "biller_type": "PAYEE",
        "partial_pay": "N",
        "pay_after_duedate": "Y",
        "online_validation": "Y",
        "isbillerbbps": "Y",
        "paymentamount_validation": "Y",
        "customer_conv_fee": [
            {
                "payment_method": "BankAccount",
                "payment_channel": "Mobile",
                "bou_conv_fee_type": "fixed",
                "bou_conv_fee": "5.00",
                "amount_slab_start": "0.00",
                "amount_slab_end": "99999999.99"
            },
            {
                "payment_method": "CreditCard",
                "payment_channel": "Mobile",
                "bou_conv_fee_type": "fixed",
                "bou_conv_fee": "5.00",
                "amount_slab_start": "0.00",
                "amount_slab_end": "99999999.99"
            }
        ]
    },
    {
        "objectid": "biller",
        "billerid": "SUND00000NAT01",
        "biller_legal_name": "Sun Direct TV",
        "biller_name": "Sun Direct TV",
        "biller_location": "National",
        "biller_category": "DTH",
        "biller_reg_address": "Murasoli Maran Towers, No.73, MRC Naga Main Road, MRC Nagar",
        "biller_reg_city": "Chennai",
        "biller_reg_pin": "600028",
        "biller_reg_state": "Tamil Nadu",
        "biller_reg_country": "India",
        "biller_mode": "ONLINE",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "5.00",
                "max_limit": "50000.00"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "5.00",
                "max_limit": "50000.00"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "5.00",
                "max_limit": "50000.00"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "5.00",
                "max_limit": "50000.00"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "5.00",
                "max_limit": "50000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "5.00",
                "max_limit": "50000.00"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "5.00",
                "max_limit": "50000.00"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "5.00",
                "max_limit": "50000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "5.00",
                "max_limit": "50000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "5.00",
                "max_limit": "50000.00"
            },
            {
                "payment_channel": "POS",
                "min_limit": "5.00",
                "max_limit": "50000.00"
            }
        ],
        "biller_status": "INACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Subscriber Number",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[0-9A-Za-z]{11}$",
                "error_message": "Please enter a valid 11 digit Subscriber Number (eg. 98792157401)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/SUND00000NAT01.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/SUND00000NAT01.gif",
        "biller_type": "PAYEE",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "Y",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "TIKO00000NAT01",
        "biller_legal_name": "Tikona Infinet Pvt Ltd ",
        "biller_name": "Tikona Infinet Pvt Ltd ",
        "biller_location": "National",
        "biller_category": "Broadband Postpaid",
        "biller_reg_address": "Office 3 A, Corpora Building, 3rd Floor, Lbs Marg, Bhandup West",
        "biller_reg_city": "Mumbai",
        "biller_reg_pin": "400078",
        "biller_reg_state": "Maharashtra",
        "biller_reg_country": "India",
        "biller_mode": "ONLINE",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "50000.00"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "50000.00"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "50000.00"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "50000.00"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "50000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "50000.00"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "50000.00"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "50000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "50000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "50000.00"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "50000.00"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Service Id",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{10}$",
                "error_message": "Please enter a valid 10 digit Service ID (eg. 1115409401)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/TIKO00000NAT01.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/TIKO00000NAT01.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "Y",
        "online_validation": "Y",
        "isbillerbbps": "Y",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "DISH00000NAT01",
        "biller_legal_name": "Dish TV Limited",
        "biller_name": "Dish TV",
        "biller_location": "National",
        "biller_category": "DTH",
        "biller_reg_address": "18th Floor, A- Wing, Marathon Futurex, N M Joshi Marg, Lower Parel",
        "biller_reg_city": "Mumbai",
        "biller_reg_pin": "400013",
        "biller_reg_state": "Maharashtra",
        "biller_reg_country": "India",
        "biller_mode": "ONLINE",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "10.00",
                "max_limit": "25000.00"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "10.00",
                "max_limit": "25000.00"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "10.00",
                "max_limit": "25000.00"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "10.00",
                "max_limit": "25000.00"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "10.00",
                "max_limit": "25000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "10.00",
                "max_limit": "25000.00"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "10.00",
                "max_limit": "25000.00"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "10.00",
                "max_limit": "25000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "10.00",
                "max_limit": "25000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "10.00",
                "max_limit": "25000.00"
            },
            {
                "payment_channel": "POS",
                "min_limit": "10.00",
                "max_limit": "25000.00"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Registered Mobile Number / Viewing Card Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{10,11}$",
                "error_message": "Please enter a valid Registered Mobile Number or Viewing Card Number (eg. 9123487245)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/DISH00000NAT01.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/DISH00000NAT01.gif",
        "biller_type": "PAYEE",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "Y",
        "isbillerbbps": "Y",
        "paymentamount_validation": "Y"
    },
    {
        "objectid": "biller",
        "billerid": "TSEC00000TRI01",
        "biller_legal_name": "Tripura Electricity Corp Limited",
        "biller_name": "Tripura Electricity",
        "biller_location": "Tripura",
        "biller_category": "Electricity",
        "biller_reg_address": "Bidyut Bhaban, Banamalipur",
        "biller_reg_city": "Agartala",
        "biller_reg_pin": "799007",
        "biller_reg_state": "Tripura",
        "biller_reg_country": "India",
        "biller_mode": "ONLINE",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Consumer ID",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{1,12}$",
                "error_message": "Please enter a valid Consumer ID that is a maximum of 12 digits (eg. 000270004271)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/TSEC00000TRI01.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/TSEC00000TRI01.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "Y",
        "online_validation": "Y",
        "isbillerbbps": "Y",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "UPCL00000UTT01",
        "biller_legal_name": "Uttarakhand Power Corporation Limited",
        "biller_name": "Uttarakhand Power",
        "biller_location": "Uttarakhand",
        "biller_category": "Electricity",
        "biller_reg_address": "Urja Bhawan,kanwali Road",
        "biller_reg_city": "Dehradun",
        "biller_reg_pin": "248001",
        "biller_reg_state": "Uttarakhand",
        "biller_reg_country": "India",
        "biller_mode": "OFFLINEA",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Service Connection Number",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[0-9A-Za-z]{13}$",
                "error_message": "Please enter a valid 13 character Service Connection Number (eg. 5642164)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/UPCL00000UTT01.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/UPCL00000UTT01.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "Y",
        "online_validation": "Y",
        "isbillerbbps": "Y",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "MVVL00000MUZ01",
        "biller_legal_name": "Muzaffarpur Vidyut Vitran Limited",
        "biller_name": "Muzaffarpur Vidyut Nigam",
        "biller_location": "Muzaffarpur",
        "biller_category": "Electricity",
        "biller_reg_address": "NH-28, C/O Pandey Motors  Pvt Ltd, New Bhagwanpura, Vaishali",
        "biller_reg_city": "Muzaffarpur",
        "biller_reg_pin": "842003",
        "biller_reg_state": "Bihar",
        "biller_reg_country": "India",
        "biller_mode": "ONLINE",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Consumer No",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{10,12}$",
                "error_message": "Please enter a valid Consumer No between 10 to 12 digits (eg. 4454211)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/MVVL00000MUZ01.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/MVVL00000MUZ01.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "Y",
        "online_validation": "Y",
        "isbillerbbps": "Y",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "SNDL00000NAG01",
        "biller_legal_name": "SNDL Nagpur",
        "biller_name": "SNDL Nagpur",
        "biller_location": "Nagpur",
        "biller_category": "Electricity",
        "biller_reg_address": "5th Floor, Narang Tower, Palm Road, Civil Lines",
        "biller_reg_city": "Nagpur",
        "biller_reg_pin": "440001",
        "biller_reg_state": "Maharashtra",
        "biller_reg_country": "India",
        "biller_mode": "ONLINE",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Consumer No",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{10,12}$",
                "error_message": "Please enter a valid Consumer No that is a maximum of 20 digits eg. (8713214)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/SNDL00000NAG01.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/SNDL00000NAG01.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "Y",
        "online_validation": "Y",
        "isbillerbbps": "Y",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "UJS000000UTT01",
        "biller_legal_name": "Uttarakhand Jal Sansthan",
        "biller_name": "Uttarakhand Jal Sansthan",
        "biller_location": "Uttarakhand",
        "biller_category": "Water",
        "biller_reg_address": "Jal Bhavan, B block, Nehru Colony, Dalanwala, Dehradun, Uttarakhand 248001",
        "biller_reg_city": "Dehradun",
        "biller_reg_pin": "248001",
        "biller_reg_state": "Uttarakhand",
        "biller_reg_country": "India",
        "biller_mode": "ONLINE",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Consumer Number (Last 7 Digits)",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{7}$",
                "error_message": "Please enter the 7 digits of your Consumer Number (eg. 2803930)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/UJS000000UTT01.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/UJS000000UTT01.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "Y",
        "online_validation": "Y",
        "isbillerbbps": "Y",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "BSNLLLCORNAT01",
        "biller_legal_name": "Bharat Sanchar Nigam Limited - Landline Corporate",
        "biller_name": "BSNL Landline - Corporate",
        "biller_location": "National",
        "biller_category": "Landline Postpaid",
        "biller_reg_address": "3rd Floor, Bharat Sanchar Bhawan, Harish Chander Mathur Lane, Janpath, New Delhi",
        "biller_reg_city": "New Delhi",
        "biller_reg_pin": "110001",
        "biller_reg_state": "Delhi",
        "biller_reg_country": "India",
        "biller_mode": "ONLINE",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "1000000.00"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "1000000.00"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "1000000.00"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "1000000.00"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "1000000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "1000000.00"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "1000000.00"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "1000000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "1000000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "1000000.00"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "1000000.00"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Account Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{10}$",
                "error_message": "Please enter a valid 10 digit Account Number (eg. 1000118599)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/BSNLLLCORNAT01.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/BSNLLLCORNAT01.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "Y",
        "isbillerbbps": "Y",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "NESCO0000ODI01",
        "biller_legal_name": "North Eastern Electricity Supply Company Limited - Odisha",
        "biller_name": "NESCO - Odisha",
        "biller_location": "Odisha",
        "biller_category": "Electricity",
        "biller_reg_address": "Januganj, Baleshwar",
        "biller_reg_city": "Balasore",
        "biller_reg_pin": "756019",
        "biller_reg_state": "Odisha",
        "biller_reg_country": "India",
        "biller_mode": "ONLINE",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Consumer Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{12}$",
                "error_message": "Please enter a valid 12 digit Consumer Number (eg. 211301580037)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/NESCO0000ODI01.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/NESCO0000ODI01.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "Y",
        "online_validation": "Y",
        "isbillerbbps": "Y",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "SOUTHCO00ODI01",
        "biller_legal_name": "Southern Electricity Supply Company Limited, Odisha",
        "biller_name": "SOUTHCO - Odisha",
        "biller_location": "Odisha",
        "biller_category": "Electricity",
        "biller_reg_address": "Courtpeta, Berhampur, Ganjam",
        "biller_reg_city": "Berhampur",
        "biller_reg_pin": "760004",
        "biller_reg_state": "Odisha",
        "biller_reg_country": "India",
        "biller_mode": "ONLINE",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Consumer Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{12}$",
                "error_message": "Please enter a valid 12 digit Consumer Number (eg. 211001040138)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/SOUTHCO00ODI01.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/SOUTHCO00ODI01.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "Y",
        "online_validation": "Y",
        "isbillerbbps": "Y",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "UITWOB000BHW01",
        "biller_legal_name": "Urban Improvement Trust - Bhiwadi",
        "biller_name": "UIT - Bhiwadi",
        "biller_location": "Bhiwadi",
        "biller_category": "Water",
        "biller_reg_address": "Bhagat Singh Colony, Opp. MPS School Bhiwadi - Dharuhera Main Road",
        "biller_reg_city": "Bhiwadi",
        "biller_reg_pin": "301019",
        "biller_reg_state": "Rajasthan",
        "biller_reg_country": "India",
        "biller_mode": "OFFLINEA",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Customer ID",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{3,20}$",
                "error_message": "Please enter a valid min 3 and max 20 character Customer ID (eg. 0371)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/UITWOB000BHW01.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/UITWOB000BHW01.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "Y",
        "online_validation": "Y",
        "isbillerbbps": "Y",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "TNGCLOB00TRI01",
        "biller_legal_name": "Tripura Natural Gas Limited",
        "biller_name": "Tripura Natural Gas",
        "biller_location": "Tripura",
        "biller_category": "Gas",
        "biller_reg_address": "Shilpa Nigam Bhawan, Khejur Bagan, Kunjaban",
        "biller_reg_city": "Agartala",
        "biller_reg_pin": "799006",
        "biller_reg_state": "Tripura",
        "biller_reg_country": "India",
        "biller_mode": "OFFLINEA",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Consumer Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{1,20}$",
                "error_message": "Please enter a valid min 1 and max 20 digit Customer Number (eg. 2106828)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/TNGCLOB00TRI01.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/TNGCLOB00TRI01.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "Y",
        "online_validation": "Y",
        "isbillerbbps": "Y",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "MCG000000GUR01",
        "biller_legal_name": "Municipal Corporation of Gurugram",
        "biller_name": "MCGUR",
        "biller_location": "Gurgaon",
        "biller_category": "Water",
        "biller_reg_address": "C-1, Info City, Sector 34",
        "biller_reg_city": "Gurgaon",
        "biller_reg_pin": "122022",
        "biller_reg_state": "Haryana",
        "biller_reg_country": "India",
        "biller_mode": "ONLINE",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "K No",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[0-9A-Za-z]{7,20}$",
                "error_message": "Please enter a valid K No that is between 7 to 20 characters (eg. 4654654211A)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/MCG000000GUR01.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/MCG000000GUR01.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "Y",
        "online_validation": "Y",
        "isbillerbbps": "Y",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "UPPCL0000UTP01",
        "biller_legal_name": "Uttar Pradesh Power Corp Ltd - URBAN",
        "biller_name": "Uttar Pradesh Power Corp Ltd - URBAN",
        "biller_location": "Uttar Pradesh",
        "biller_category": "Electricity",
        "biller_reg_address": "Shakti Bhawanashok Marg",
        "biller_reg_city": "Lucknow",
        "biller_reg_pin": "226001",
        "biller_reg_state": "Uttar Pradesh",
        "biller_reg_country": "India",
        "biller_mode": "ONLINE",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Consumer Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{10,12}$",
                "error_message": "Please enter a valid Consumer Number between 10 to 12 digits (eg. 5654451452)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/UPPCL0000UTP01.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/UPPCL0000UTP01.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "Y",
        "online_validation": "Y",
        "isbillerbbps": "Y",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "HCG000000HAR01",
        "biller_legal_name": "Haryana City Gas Limited",
        "biller_name": "Haryana City Gas",
        "biller_location": "Haryana",
        "biller_category": "Gas",
        "biller_reg_address": "A-149, Sushant Lok - 1",
        "biller_reg_city": "Gurgaon",
        "biller_reg_pin": "122002",
        "biller_reg_state": "Haryana",
        "biller_reg_country": "India",
        "biller_mode": "OFFLINEA",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "CRN Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{10}$",
                "error_message": "Please enter a valid 10 digit CRN Number (eg. 0140100179)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/HCG000000HAR01.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/HCG000000HAR01.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "Y",
        "online_validation": "Y",
        "isbillerbbps": "Y",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "SGL000000GUJ01",
        "biller_legal_name": "Sabarmati Gas Limited",
        "biller_name": "Sabarmati Gas",
        "biller_location": "Gujarat",
        "biller_category": "Gas",
        "biller_reg_address": "PLOT NO. 907 SECTOR-21",
        "biller_reg_city": "Gandhinagar",
        "biller_reg_pin": "382021",
        "biller_reg_state": "Gujarat",
        "biller_reg_country": "India",
        "biller_mode": "ONLINE",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Customer ID",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{12}$",
                "error_message": "Please enter a valid 12 digit Customer ID (eg. 571154145624)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/SGL000000GUJ01.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/SGL000000GUJ01.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "Y",
        "online_validation": "Y",
        "isbillerbbps": "Y",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "TPADL0000AJM01",
        "biller_legal_name": "TP Ajmer Distribution Limited",
        "biller_name": "TP Ajmer Distribution (TPADL)",
        "biller_location": "Ajmer",
        "biller_category": "Electricity",
        "biller_reg_address": "34 Sant Tukaram Road, Carnac Bunder",
        "biller_reg_city": "Mumbai",
        "biller_reg_pin": "400009",
        "biller_reg_state": "Maharashtra",
        "biller_reg_country": "India",
        "biller_mode": "ONLINE",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "K Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{12}$",
                "error_message": "Please enter a valid 12 digit K Number (eg. 110421004887)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/TPADL0000AJM01.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/TPADL0000AJM01.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "Y",
        "isbillerbbps": "Y",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "NBPDCL000BHI01",
        "biller_legal_name": "North Bihar Power Distribution Company Limited",
        "biller_name": "North Bihar Power",
        "biller_location": "Bihar",
        "biller_category": "Electricity",
        "biller_reg_address": "Vidyut Bhavan, Bailey Road",
        "biller_reg_city": "Patna",
        "biller_reg_pin": "800001",
        "biller_reg_state": "Bihar",
        "biller_reg_country": "India",
        "biller_mode": "ONLINE",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "CA Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{9,11}$",
                "error_message": "Please enter a valid Consumer Number between 9 to 11 digits (eg. 441231513)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/NBPDCL000BHI01.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/NBPDCL000BHI01.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "Y",
        "online_validation": "Y",
        "isbillerbbps": "Y",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "SBPDCL000BHI01",
        "biller_legal_name": "South Bihar Power Distribution Company Limited",
        "biller_name": "South Bihar Power",
        "biller_location": "Bihar",
        "biller_category": "Electricity",
        "biller_reg_address": "Vidyut Bhavan, Bailey Road",
        "biller_reg_city": "Patna",
        "biller_reg_pin": "800001",
        "biller_reg_state": "Bihar",
        "biller_reg_country": "India",
        "biller_mode": "ONLINE",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "CA Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{8,12}$",
                "error_message": "Please enter a valid Consumer Number between 8 to 12 digits (eg. 4566547213)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/SBPDCL000BHI01.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/SBPDCL000BHI01.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "Y",
        "online_validation": "Y",
        "isbillerbbps": "Y",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "WESCO0000ODI01",
        "biller_legal_name": "Western Electricity Supply Company of Orrisa Limited",
        "biller_name": "WESCO",
        "biller_location": "Odisha",
        "biller_category": "Electricity",
        "biller_reg_address": "Headquarter:AtlPo- Burla",
        "biller_reg_city": "Sambalpur",
        "biller_reg_pin": "768017",
        "biller_reg_state": "Odisha",
        "biller_reg_country": "India",
        "biller_mode": "ONLINE",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Consumer Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{12}$",
                "error_message": "Please enter a valid 12 digit Consumer Number (eg. 411722130164)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/WESCO0000ODI01.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/WESCO0000ODI01.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "Y",
        "online_validation": "Y",
        "isbillerbbps": "Y",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "CSPDCL000CHH01",
        "biller_legal_name": "Chhattisgarh State Power Distribution Co Limited",
        "biller_name": "Chattisgarh State Power",
        "biller_location": "Chattisgarh",
        "biller_category": "Electricity",
        "biller_reg_address": "Office of the Executive Director (S& P) 4th Floor, Vidyut Seva Bhawanm Danganiya",
        "biller_reg_city": "Raipur",
        "biller_reg_pin": "492013",
        "biller_reg_state": "Chhattisgarh",
        "biller_reg_country": "India",
        "biller_mode": "ONLINE",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Business Partner Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{10}$",
                "error_message": "Please enter a valid 10 digit Business Partner Number (eg. 60000239389)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/CSPDCL000CHH01.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/CSPDCL000CHH01.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "Y",
        "online_validation": "Y",
        "isbillerbbps": "Y",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "AVVNL0000RAJ01",
        "biller_legal_name": "Ajmer Vidyut Vitran Nigam Limited",
        "biller_name": "Ajmer Vidyut Vitran Nigam (AVVNL)",
        "biller_location": "Rajasthan",
        "biller_category": "Electricity",
        "biller_reg_address": "Vidyut Bhawan, Panchsheel Nagar, Makarwali Road",
        "biller_reg_city": "Ajmer",
        "biller_reg_pin": "305004",
        "biller_reg_state": "Rajasthan",
        "biller_reg_country": "India",
        "biller_mode": "ONLINE",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "K Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{12}$",
                "error_message": "Please enter a valid 12 digit K Number (eg. 110414018826)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/AVVNL0000RAJ01.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/AVVNL0000RAJ01.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "Y",
        "online_validation": "Y",
        "isbillerbbps": "Y",
        "paymentamount_validation": "N",
        "bbps_billerid": "AVVNL0000RAJ01"
    },
    {
        "objectid": "biller",
        "billerid": "JDVVNL000RAJ01",
        "biller_legal_name": "Jodhpur Vidyut Vitran Nigam Limited",
        "biller_name": "Jodhpur Vidyut Vitran Nigam (JDVVNL)",
        "biller_location": "Rajasthan",
        "biller_category": "Electricity",
        "biller_reg_address": "New Power House, Industrial Area",
        "biller_reg_city": "Jodhpur",
        "biller_reg_pin": "342003",
        "biller_reg_state": "Rajasthan",
        "biller_reg_country": "India",
        "biller_mode": "ONLINE",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "K Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{12}$",
                "error_message": "Please enter a valid 12 digit K Number (eg. 210725024349)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/JDVVNL000RAJ01.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/JDVVNL000RAJ01.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "Y",
        "online_validation": "Y",
        "isbillerbbps": "Y",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "AXISCARD",
        "biller_legal_name": "Axis Bank Limited - Card",
        "biller_name": "Axis Bank Credit Card",
        "biller_location": "National",
        "biller_category": "Credit Card",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "N"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "N"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Axis Card Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^407438[0-9]{10}$|^407439[0-9]{10}$|^411146[0-9]{10}$|^434975[0-9]{10}$|^434990[0-9]{10}$|^471860[0-9]{10}$|^471861[0-9]{10}$|^418212[0-9]{10}$|^471863[0-9]{10}$|^471864[0-9]{10}$|^486586[0-9]{10}$|^483599[0-9]{10}$|^418120[0-9]{10}$|^471862[0-9]{10}$|^436560[0-9]{10}$|^524178[0-9]{10}$|^461116[0-9]{10}$|^461117[0-9]{10}$|^461118[0-9]{10}$|^524240[0-9]{10}$|^405995[0-9]{10}$|^530562[0-9]{10}$|^559340[0-9]{10}$|^559341[0-9]{10}$|^450506[0-9]{10}$|^451456[0-9]{10}$|^451457[0-9]{10}$",
                "error_message": "Please enter a valid 16 digit Axis Card Number (eg. 405995XXXXXX0004)",
                "seq": "1",
                "encryption_required": "Y"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/AXISCARD.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/AXISCARD.gif",
        "biller_type": "PAYEE",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "CITICARD",
        "biller_legal_name": "Citibank NA - Card",
        "biller_name": "Citibank Credit Card",
        "biller_location": "National",
        "biller_category": "Credit Card",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "N"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "N"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Citibank Card Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[3-6][0-9]{15}$",
                "error_message": "Please enter a valid 16 digit Citibank Card Number (eg. 367060XXXXXX0007)",
                "seq": "1",
                "encryption_required": "Y"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/CITICARD.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/CITICARD.gif",
        "biller_type": "PAYEE",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "ICICICARD",
        "biller_legal_name": "ICICI Bank - Card",
        "biller_name": "ICICI Credit Card",
        "biller_location": "National",
        "biller_category": "Credit Card",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "N"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "N"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "ICICI Card Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^376944[0-9]{9}$|^377040[0-9]{9}$|^377041[0-9]{9}$|^377043[0-9]{9}$|^402368[0-9]{10}$|^402853[0-9]{10}$|^405533[0-9]{10}$|^407651[0-9]{10}$|^407659[0-9]{10}$|^410059[0-9]{10}$|^410202[0-9]{10}$|^413289[0-9]{10}$|^420580[0-9]{10}$|^444341[0-9]{10}$|^445084[0-9]{10}$|^447746[0-9]{10}$|^447747[0-9]{10}$|^447758[0-9]{10}$|^455452[0-9]{10}$|^462986[0-9]{10}$|^462999[0-9]{10}$|^473115[0-9]{10}$|^470573[0-9]{10}$|^473195[0-9]{10}$|^486409[0-9]{10}$|^486410[0-9]{10}$|^486630[0-9]{10}$",
                "error_message": "Please enter a valid 16 digit ICICI Card Number (eg. 374742XXXXXX0000)",
                "seq": "1",
                "encryption_required": "Y"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/ICICICARD.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/ICICICARD.gif",
        "biller_type": "PAYEE",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "SBICARD",
        "biller_legal_name": "SBICARD Limited",
        "biller_name": "SBI Card",
        "biller_location": "National",
        "biller_category": "Credit Card",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "N"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "N"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "SBI Card Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{16}$",
                "error_message": "Please enter a valid 16 digit SBI Card Number (eg. 400666XXXXXX0000)",
                "seq": "1",
                "encryption_required": "Y"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/SBICARD.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/SBICARD.gif",
        "biller_type": "PAYEE",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "GESCOM000KAR01",
        "biller_legal_name": "Gulbarga Electricity Supply Company Limited",
        "biller_name": "Gulbarga Electricity",
        "biller_location": "Karnataka",
        "biller_category": "Electricity",
        "biller_reg_address": "Station Road Kalaburagi",
        "biller_reg_city": "Gulbarga",
        "biller_reg_pin": "585102",
        "biller_reg_state": "Karnataka",
        "biller_reg_country": "India",
        "biller_mode": "ONLINE",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Consumer Number",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[0-9A-Za-z]{10}$",
                "error_message": "Please enter a valid 10 characters Consumer Number (eg. 1244814564)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/GESCOM000KAR01.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/GESCOM000KAR01.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "Y",
        "online_validation": "Y",
        "isbillerbbps": "Y",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "VMTCC",
        "biller_legal_name": "Visa Credit Card Payment",
        "biller_name": "Visa Credit Card Payment",
        "biller_location": "National",
        "biller_category": "Credit Card",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Visa Credit Card Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^400666[0-9]{10}$|^400667[0-9]{10}$|^402368[0-9]{10}$|^402853[0-9]{10}$|^402874[0-9]{10}$|^403250[0-9]{10}$|^403251[0-9]{10}$|^403405[0-9]{10}$|^404276[0-9]{10}$|^404278[0-9]{10}$|^405028[0-9]{10}$|^405450[0-9]{10}$|^405451[0-9]{10}$|^405533[0-9]{10}$|^405995[0-9]{10}$|^407438[0-9]{10}$|^407439[0-9]{10}$|^407651[0-9]{10}$|^407659[0-9]{10}$|^408971[0-9]{10}$|^409030[0-9]{10}$|^409031[0-9]{10}$|^409064[0-9]{10}$|^410059[0-9]{10}$|^410202[0-9]{10}$|^411146[0-9]{10}$|^412903[0-9]{10}$",
                "error_message": "Please enter a valid 16 digit Visa Credit Card Number (eg. 400666XXXXXX0300)",
                "seq": "1",
                "encryption_required": "Y"
            },
            {
                "parameter_name": "Beneficiary Name",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[0-9a-zA-Z\\s\\.]{3,25}$",
                "error_message": "Please enter a valid min 3 and max 25 characters Beneficiary Name (eg. RKRISHNAMURTHY)",
                "seq": "2"
            },
            {
                "parameter_name": "Sender Name",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[0-9a-zA-Z\\s\\.]{3,25}$",
                "error_message": "Please enter a valid min 3 and max 25 character Sender Name (eg. KDATHTHATHREYAN )",
                "seq": "3"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/VMTCC.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/VMTCC.gif",
        "biller_type": "PAYEE",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "HDFCMF",
        "biller_legal_name": "HDFC Mutual Fund",
        "biller_name": "Hdfc Mutual Fund",
        "biller_location": "National",
        "biller_category": "Mutual Fund",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Unique Registration No.",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^HD[0-9a-zA-Z]{6}[\\-]{1}[0-9a-zA-Z]{1,6}$|^hd[0-9a-zA-Z]{6}[\\-]{1}[0-9a-zA-Z]{1,6}$",
                "error_message": "Please enter a valid Unique Registration Number (eg. HD039410-000236)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/HDFCMF.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/HDFCMF.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "TATAPWR00MUM11",
        "biller_legal_name": "Tata Power Limited - Mumbai Test",
        "biller_name": "Tata Power - Mumbai Test",
        "biller_location": "Mumbai",
        "biller_category": "Electricity",
        "biller_reg_address": "Bombay House, 24, Homi Modi Street",
        "biller_reg_city": "Mumbai",
        "biller_reg_pin": "400001",
        "biller_reg_state": "Maharashtra",
        "biller_reg_country": "India",
        "biller_mode": "ONLINE",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "15-09-2018 12:39:45",
        "authenticators": [
            {
                "parameter_name": "Consumer Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{12}$",
                "error_message": "Please enter a valid 12 digits Consumer Number (eg. 900000342220)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/TATAPWR00MUM01.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/TATAPWR00MUM01.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "Y",
        "isbillerbbps": "Y",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "VMTDC",
        "biller_legal_name": "Visa Debit Card Transfer",
        "biller_name": "Visa Debit Card Transfer",
        "biller_location": "National",
        "biller_category": "Credit Card",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "N"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "N"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            }
        ],
        "biller_status": "INACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "VISA Card Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{16}$",
                "error_message": "Please enter a valid VISA Card Number (eg 4293930057081485)",
                "seq": "1"
            },
            {
                "parameter_name": "Beneficiary Name",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[0-9a-zA-Z\\s\\.]{3,25}$",
                "error_message": "Please enter a valid Beneficiary Name (min 3 and max 25 characters)",
                "seq": "2"
            },
            {
                "parameter_name": "Sender Name",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[0-9a-zA-Z\\s\\.]{3,25}$",
                "error_message": "Please enter a valid minmum 3 and maxmum 25 characters for Sender Name eg. (Anuj Tripathi ) ",
                "seq": "3"
            }
        ],
        "biller_logo": "https://uat.billdesk.com/images/billerlogo/VMTDC.gif",
        "biller_bill_copy": "https://uat.billdesk.com/images/billcopy/VMTDC.gif",
        "biller_type": "PAYEE",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "SUND00000NAT02",
        "biller_legal_name": "Sun Direct TV (With Validation)",
        "biller_name": "Sun Direct TV (With Validation)",
        "biller_location": "National",
        "biller_category": "DTH",
        "biller_reg_address": "Murasoli Maran Towers, No.73, MRC Naga Main Road, MRC Nagar",
        "biller_reg_city": "Chennai",
        "biller_reg_pin": "600028",
        "biller_reg_state": "Tamil Nadu",
        "biller_reg_country": "India",
        "biller_mode": "ONLINE",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "5.00",
                "max_limit": "50000.00"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "5.00",
                "max_limit": "50000.00"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "5.00",
                "max_limit": "50000.00"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "5.00",
                "max_limit": "50000.00"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "5.00",
                "max_limit": "50000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "5.00",
                "max_limit": "50000.00"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "5.00",
                "max_limit": "50000.00"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "5.00",
                "max_limit": "50000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "5.00",
                "max_limit": "50000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "5.00",
                "max_limit": "50000.00"
            },
            {
                "payment_channel": "POS",
                "min_limit": "5.00",
                "max_limit": "50000.00"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "14-11-2018 18:05:37",
        "authenticators": [
            {
                "parameter_name": "Subscriber Number",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[0-9A-Za-z]{11}$",
                "error_message": "Please enter a valid 11 digit Subscriber Number (eg. 98792157401)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/SUND00000NAT02.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/SUND00000NAT02.gif",
        "biller_type": "PAYEE",
        "partial_pay": "Y",
        "pay_after_duedate": "Y",
        "online_validation": "Y",
        "isbillerbbps": "Y",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "AIRLLOB",
        "biller_legal_name": "Airtel Landline",
        "biller_name": "Airtel Landline",
        "biller_location": "National",
        "biller_category": "Landline Postpaid",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Telephone number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{11}$",
                "error_message": "Please enter a valid 11 Digit Telephone Number (eg. 01141451062)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/AIRLLOB.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/AIRLLOB.gif",
        "biller_type": "BOTH",
        "partial_pay": "Y",
        "pay_after_duedate": "Y",
        "online_validation": "Y",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "AIRMOBOB",
        "biller_legal_name": "Airtel Postpaid",
        "biller_name": "Airtel Postpaid",
        "biller_location": "National",
        "biller_category": "Mobile Postpaid",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Mobile Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{10}$",
                "error_message": "Please enter a valid 10 digit Mobile Number (eg. 7022027125)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/AIRMOBOB.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/AIRMOBOB.gif",
        "biller_type": "BOTH",
        "partial_pay": "Y",
        "pay_after_duedate": "Y",
        "online_validation": "Y",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "AIRCELPRE",
        "biller_legal_name": "Aircel Prepaid",
        "biller_name": "Aircel Prepaid",
        "biller_location": "National",
        "biller_category": "Mobile Prepaid",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            }
        ],
        "biller_status": "INACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Mobile Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{10,12}$",
                "error_message": "Please enter a valid 10 digit Aircel Prepaid Mobile Number (e.g. 9930065554) ",
                "seq": "1"
            }
        ],
        "biller_logo": "https://uat.billdesk.com/images/billerlogo/AIRCELPRE.gif",
        "biller_bill_copy": "https://uat.billdesk.com/images/billcopy/AIRCELPRE.gif",
        "biller_type": "PAYEE",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "Y",
        "isbillerbbps": "N",
        "paymentamount_validation": "Y",
        "customer_conv_fee": [
            {
                "payment_method": "CreditCard",
                "payment_channel": "Mobile",
                "bou_conv_fee_type": "fixed",
                "bou_conv_fee": "5.00",
                "amount_slab_start": "0.00",
                "amount_slab_end": "99999999.99"
            },
            {
                "payment_method": "BankAccount",
                "payment_channel": "Mobile",
                "bou_conv_fee_type": "fixed",
                "bou_conv_fee": "5.00",
                "amount_slab_start": "0.00",
                "amount_slab_end": "99999999.99"
            }
        ]
    },
    {
        "objectid": "biller",
        "billerid": "AIRTELPRE",
        "biller_legal_name": "Airtel Prepaid",
        "biller_name": "Airtel Prepaid",
        "biller_location": "National",
        "biller_category": "Mobile Prepaid",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Mobile Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{10}$",
                "error_message": "Please enter a valid 10 digit Mobile Number (eg. 0808515438)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/AIRTELPRE.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/AIRTELPRE.gif",
        "biller_type": "PAYEE",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "Y",
        "isbillerbbps": "N",
        "paymentamount_validation": "Y",
        "customer_conv_fee": [
            {
                "payment_method": "BankAccount",
                "payment_channel": "Mobile",
                "bou_conv_fee_type": "fixed",
                "bou_conv_fee": "5.00",
                "amount_slab_start": "0.00",
                "amount_slab_end": "99999999.99"
            },
            {
                "payment_method": "CreditCard",
                "payment_channel": "Mobile",
                "bou_conv_fee_type": "fixed",
                "bou_conv_fee": "5.00",
                "amount_slab_start": "0.00",
                "amount_slab_end": "99999999.99"
            }
        ]
    },
    {
        "objectid": "biller",
        "billerid": "MTNLMUMPRE",
        "biller_legal_name": "Mahanagar Telephone Nigam Limited Mumbai - Prepaid",
        "biller_name": "MTNL Mumbai Prepaid",
        "biller_location": "National",
        "biller_category": "Mobile Prepaid",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Mobile Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{10}$",
                "error_message": "Please enter a valid 10 digit Mobile Number (eg. 7992103661)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/MTNLMUMPRE.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/MTNLMUMPRE.gif",
        "biller_type": "PAYEE",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "Y",
        "isbillerbbps": "N",
        "paymentamount_validation": "Y",
        "additional_validation_details": [
            {
                "parameter_name": "Recharge Type",
                "data_type": "List",
                "optional": "N",
                "regex": "1|3",
                "error_message": "Please enter valid Recharge Type",
                "list_of_values": [
                    {
                        "name": "TopUp",
                        "value": "1"
                    },
                    {
                        "name": "Special Recharge",
                        "value": "3"
                    }
                ]
            }
        ]
    },
    {
        "objectid": "biller",
        "billerid": "RIMGSMPRE",
        "biller_legal_name": "RIM GSM Prepaid",
        "biller_name": "RIM GSM Prepaid",
        "biller_location": "National",
        "biller_category": "Mobile Prepaid",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            }
        ],
        "biller_status": "INACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Mobile Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{10,12}$",
                "error_message": "Please enter a valid 10 digit Reliance GSM Prepaid Mobile Number (e.g. 9930065554) ",
                "seq": "1"
            }
        ],
        "biller_logo": "https://uat.billdesk.com/images/billerlogo/RIMGSMPRE.gif",
        "biller_bill_copy": "https://uat.billdesk.com/images/billcopy/RIMGSMPRE.gif",
        "biller_type": "PAYEE",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "Y",
        "isbillerbbps": "N",
        "paymentamount_validation": "Y"
    },
    {
        "objectid": "biller",
        "billerid": "UNINORPRE",
        "biller_legal_name": "Telenor Limited - Prepaid",
        "biller_name": "Telenor Prepaid",
        "biller_location": "National",
        "biller_category": "Mobile Prepaid",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Mobile Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{10}$",
                "error_message": "Please enter a valid 10 digit Mobile Number (eg. 7037015083)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/UNINORPRE.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/UNINORPRE.gif",
        "biller_type": "PAYEE",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "Y",
        "isbillerbbps": "N",
        "paymentamount_validation": "Y"
    },
    {
        "objectid": "biller",
        "billerid": "DOCOMOPRE",
        "biller_legal_name": "Tata Docomo Limited - Prepaid",
        "biller_name": "Tata Docomo Prepaid",
        "biller_location": "National",
        "biller_category": "Mobile Prepaid",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Mobile Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{10}$",
                "error_message": "Please enter a valid 10 digit Mobile Number (eg. 0782808358)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/DOCOMOPRE.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/DOCOMOPRE.gif",
        "biller_type": "PAYEE",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "Y",
        "isbillerbbps": "N",
        "paymentamount_validation": "Y",
        "additional_validation_details": [
            {
                "parameter_name": "Recharge Type",
                "data_type": "List",
                "optional": "N",
                "regex": "1|3",
                "error_message": "Please enter valid Recharge Type",
                "list_of_values": [
                    {
                        "name": "TopUp",
                        "value": "1"
                    },
                    {
                        "name": "Special Recharge",
                        "value": "3"
                    }
                ]
            }
        ]
    },
    {
        "objectid": "biller",
        "billerid": "TTSLPRE",
        "biller_legal_name": "Tata Teleservices Limited - Prepaid",
        "biller_name": "Tata Indicom Prepaid",
        "biller_location": "National",
        "biller_category": "Mobile Prepaid",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Mobile Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{10}$",
                "error_message": "Please enter a valid 10 digit Mobile Number (eg. 0651645678)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/TTSLPRE.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/TTSLPRE.gif",
        "biller_type": "PAYEE",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "Y",
        "isbillerbbps": "N",
        "paymentamount_validation": "Y"
    },
    {
        "objectid": "biller",
        "billerid": "VODAFONPRE",
        "biller_legal_name": "Vodafone Limited - Prepaid",
        "biller_name": "Vodafone Prepaid",
        "biller_location": "National",
        "biller_category": "Mobile Prepaid",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "INACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Mobile Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{10}$",
                "error_message": "Please enter a valid 10 digit Mobile Number (eg. 0537525678)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/VODAFONPRE.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/VODAFONPRE.gif",
        "biller_type": "PAYEE",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "Y",
        "isbillerbbps": "N",
        "paymentamount_validation": "Y"
    },
    {
        "objectid": "biller",
        "billerid": "JIOPRE",
        "biller_legal_name": "Jio Telecom Limited - Prepaid",
        "biller_name": "Jio Prepaid",
        "biller_location": "National",
        "biller_category": "Mobile Prepaid",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "N"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "N"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "N"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Subscriber ID",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{10}|[0-9]{12}$",
                "error_message": "Please enter a valid 10 or 12 digit numeric Jio Prepaid Mobile Number or Subscriber ID (eg.  8830572691)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/JIOPRE.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/JIOPRE.gif",
        "biller_type": "PAYEE",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "Y",
        "isbillerbbps": "N",
        "paymentamount_validation": "Y",
        "additional_validation_details": [
            {
                "parameter_name": "Recharge Planid",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[A-Za-z0-9]{1,20}$",
                "error_message": "Please enter valid Recharge Planid"
            }
        ]
    },
    {
        "objectid": "biller",
        "billerid": "AIRTELDTH",
        "biller_legal_name": "Airtel DTH Recharge",
        "biller_name": "Airtel DTH Recharge",
        "biller_location": "National",
        "biller_category": "DTH",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Subscriber ID",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{1,20}$",
                "error_message": "Please enter a valid numeric Subscriber ID within 20 digits (eg. 000035201466)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/AIRTELDTH.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/AIRTELDTH.gif",
        "biller_type": "PAYEE",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "Y",
        "isbillerbbps": "N",
        "paymentamount_validation": "Y",
        "customer_conv_fee": [
            {
                "payment_method": "BankAccount",
                "payment_channel": "Mobile",
                "bou_conv_fee_type": "fixed",
                "bou_conv_fee": "5.00",
                "amount_slab_start": "0.00",
                "amount_slab_end": "99999999.99"
            },
            {
                "payment_method": "CreditCard",
                "payment_channel": "Mobile",
                "bou_conv_fee_type": "fixed",
                "bou_conv_fee": "5.00",
                "amount_slab_start": "0.00",
                "amount_slab_end": "99999999.99"
            }
        ]
    },
    {
        "objectid": "biller",
        "billerid": "CPDCHY",
        "biller_legal_name": "Southern Power Distribution Company of Telangana Limited",
        "biller_name": "Southern Power - Telangana",
        "biller_location": "Andhra Pradesh",
        "biller_category": "Electricity",
        "biller_reg_city": "Andhra Pradesh",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Unique Service number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[1]{1}[0-9]{8}$",
                "error_message": "Please enter a valid 9 digit Unique Service Number (eg. 100000000)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/CPDCHY.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/CPDCHY.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "Y",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "APDCLOB",
        "biller_legal_name": "Assam Power Distribution Company Limited",
        "biller_name": "Assam Power (APDCL RAPDR)",
        "biller_location": "Assam",
        "biller_category": "Electricity",
        "biller_reg_city": "Assam",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            }
        ],
        "biller_status": "INACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Consumer Id",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{11,12}$",
                "error_message": "Please enter a valid URN.  eg. (00000008564)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://uat.billdesk.com/images/billerlogo/APDCLOB.gif",
        "biller_bill_copy": "https://uat.billdesk.com/images/billcopy/APDCLOB.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "Y",
        "online_validation": "Y",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "TATAIG",
        "biller_legal_name": "Tata AIA Life Insurance Company Limited",
        "biller_name": "Tata AIA Life Insurance",
        "biller_location": "National",
        "biller_category": "Insurance",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Policy Number",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[A-Z]{1}[0-9]{9}$",
                "error_message": "Please enter a valid 10 character Policy Number (eg. 00020211659)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/TATAIG.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/TATAIG.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "ETLION",
        "biller_legal_name": "Edelweiss Tokio Life Insurance Company Limited",
        "biller_name": "Edelweiss Tokio Life Insurance",
        "biller_location": "National ",
        "biller_category": "Insurance",
        "biller_reg_city": "National ",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Policy number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[A-Za-z0-9]{1,20}$",
                "error_message": "Please enter a valid Policy Number that is within 20 characters (eg. 000011695E)",
                "seq": "1"
            },
            {
                "parameter_name": "Date of Birth",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9\\-]{10}$",
                "error_message": "Please enter a valid Date of Birth in DD-MM-YYYY format (eg. 04-04-1985)",
                "seq": "2"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/ETLIOB.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/ETLION.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "Y",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "INGLIF",
        "biller_legal_name": "Exide Life Insurance Company Limited",
        "biller_name": "Exide Life Insurance",
        "biller_location": "National",
        "biller_category": "Insurance",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Policy Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{8}$",
                "error_message": "Please enter a valid 8 digit Policy Number (eg. 00000100)",
                "seq": "1"
            },
            {
                "parameter_name": "Premium amount",
                "data_type": "Decimal",
                "optional": "N",
                "regex": "^[0-9]{1,8}\\.[0-9]{2}$",
                "error_message": "Please enter a valid Premium Amount in Rs.Ps format (eg.1.00)",
                "seq": "2"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/INGLIF.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/INGLIF.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "ICIPRU",
        "biller_legal_name": "ICICI Prudential Life Insurance Company Limited",
        "biller_name": "ICICI Prudential Life",
        "biller_location": "National",
        "biller_category": "Insurance",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Policy Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{8}$",
                "error_message": "Please enter a valid 8 digit Policy Number (eg. 00000445)",
                "seq": "1"
            },
            {
                "parameter_name": "Installment Premium",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^([1-9]{1}[0-9]{0,7})$",
                "error_message": "Please enter a valid Instalment Premium in Rs. format (eg. 1936)",
                "seq": "2"
            },
            {
                "parameter_name": "Name",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[A-Za-z0-9\\#\\-\\_\\(\\.\\)\\s\\,\\&\\/\\[\\]\\\\]{5,120}$",
                "error_message": "Please enter a valid min 5 and max 120 character Name (eg. KETAN RASHMIKANT SHAH )",
                "seq": "3"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/ICIPRU.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/ICIPRU.gif",
        "biller_type": "BOTH",
        "partial_pay": "Y",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "IFLIOB",
        "biller_legal_name": "India First Life Insurance Company Limited",
        "biller_name": "India First Life Insurance",
        "biller_location": "National",
        "biller_category": "Insurance",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "N"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "N"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "N"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Policy number",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[0-9A-Za-z]{8,16}$",
                "error_message": "Please enter a valid Policy Number that is within 8 to 16 characters (eg. 10000112)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/IFLIOB.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/IFLIOB.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "Y",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "MAXBUPAOB",
        "biller_legal_name": "Max Bupa Health Insurance",
        "biller_name": "Max Bupa Health Insurance",
        "biller_location": "National",
        "biller_category": "Insurance",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Policy number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{14,16}$",
                "error_message": "Please enter a valid  Policy Number  eg. (14236881646124)",
                "seq": "1"
            },
            {
                "parameter_name": "Date of Birth",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{8}$",
                "error_message": "Please enter a valid DOB having fixed length of 8 digit (eg 19540520)",
                "seq": "2"
            }
        ],
        "biller_logo": "https://uat.billdesk.com/images/billerlogo/MAXBUPAOB.gif",
        "biller_bill_copy": "https://uat.billdesk.com/images/billcopy/MAXBUPAOB.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "MPSEB",
        "biller_legal_name": "Madhya Pradesh Madhya Kshetra Vidyut Vitaran Company Limited - Bhopal",
        "biller_name": "MP Madhya Kshetra Vidyut - Bhopal",
        "biller_location": "Bhopal",
        "biller_category": "Electricity",
        "biller_reg_city": "Madhya Pradesh",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Consumer Number / IVRS ID",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{10}$",
                "error_message": "Please enter a valid 10 digit Consumer Number / IVRS ID (eg. 0000115111)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/MPSEB.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/MPSEB.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "PMCPT",
        "biller_legal_name": "Pune Muncipal Corporation - Property Tax",
        "biller_name": "PMC Property Tax",
        "biller_location": "Pune",
        "biller_category": "Tax",
        "biller_reg_city": "Pune",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Property ID",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[A-Z0-9\\/]{15}$",
                "error_message": "Please enter a valid 15 character Property ID (eg. 0/1/02/01472006)",
                "seq": "1"
            },
            {
                "parameter_name": "Mobile Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{10,12}$",
                "error_message": "Please enter a valid 10 digit Mobile Number (eg. 9850060600)",
                "seq": "2"
            },
            {
                "parameter_name": "Email ID",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[0-9a-zA-Z~!@#%\\$\\^\\&\\*\\.\\\\]{1,50}",
                "error_message": "Please enter a valid Email ID (eg. thakurbruce@gmail.com )",
                "seq": "3"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/PMCPT.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/PMCPT.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "Y",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "AEGONLIFE",
        "biller_legal_name": "Aegon Life Insurance Company Limited",
        "biller_name": "Aegon Life",
        "biller_location": "National",
        "biller_category": "Insurance",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Policy Number",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[A-Za-z0-9-]{1,30}$",
                "error_message": "Please enter a valid Policy Number within 30 characters (eg. 00104836)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/AEGONLIFE.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/AEGONLIFE.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "AIDINDIA",
        "biller_legal_name": "AID India",
        "biller_name": "AID India",
        "biller_location": "National",
        "biller_category": "Donation",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Name",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[0-9a-zA-Z\\s\\.]{3,40}$",
                "error_message": "Please enter a valid Name between 3 to 40 characters (eg. AARTI D SURVE)",
                "seq": "1"
            },
            {
                "parameter_name": "Address1",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[A-Za-z0-9\\#\\-\\_\\(\\.\\)\\s\\,\\&\\/\\[\\]\\\\]{5,60}$",
                "error_message": "Please enter a valid Address between 5 to 60 characters (eg. New Link Road, Andheri West, Mumbai)",
                "seq": "2"
            },
            {
                "parameter_name": "Telephone Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{7,12}$",
                "error_message": "Please enter a valid numeric Telephone Number between 7 to 12 digits (eg. 9833320035 )",
                "seq": "3"
            },
            {
                "parameter_name": "Donor Options",
                "data_type": "List",
                "optional": "N",
                "regex": "Support a child|Eureka learning center in a school|Sponsoring a eureka model school|Support reading, math and science programs|Relief work-Areas affected by Natural Disasters",
                "error_message": "Please select a valid Donor Options from the list",
                "seq": "4",
                "list_of_values": [
                    {
                        "name": "Support a child",
                        "value": "Support a child"
                    },
                    {
                        "name": "Eureka learning center in a school",
                        "value": "Eureka learning center in a school"
                    },
                    {
                        "name": "Sponsoring a eureka model school",
                        "value": "Sponsoring a eureka model school"
                    },
                    {
                        "name": "Support reading, math and science programs",
                        "value": "Support reading, math and science programs"
                    },
                    {
                        "name": "Relief work-Areas affected by Natural Disasters",
                        "value": "Relief work-Areas affected by Natural Disasters"
                    }
                ]
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/AIDINDIA.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/AIDINDIA.gif",
        "biller_type": "PAYEE",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "AMEXCARD",
        "biller_legal_name": "American Express Limited - Card",
        "biller_name": "Amex Card",
        "biller_location": "National",
        "biller_category": "Credit Card",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "N"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "N"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "AMEX Card Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^37443[0-9]{10}$|^3765[0-9]{11}$|^37691[0-9]{10}$|^37693[0-9]{10}$|^376940[0-9]{9}$|^376941[0-9]{9}$|^376942[0-9]{9}$|^376943[0-9]{9}$|^376945[0-9]{9}$|^376946[0-9]{9}$|^3798(52|53|54|61|62|63|67|68|69|70|71|72|76|77|78)[0-9]{9}$",
                "error_message": "Please enter a valid 15 digit AMEX Card Number (eg. 374431XXXXX1000)",
                "seq": "1",
                "encryption_required": "Y"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/AMEXCARD.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/AMEXCARD.gif",
        "biller_type": "PAYEE",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "AVIVALIFE",
        "biller_legal_name": "Aviva Life Insurance Company Limited",
        "biller_name": "Aviva Life",
        "biller_location": "National",
        "biller_category": "Insurance",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Policy Number",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[A-Z0-9]{8,12}$",
                "error_message": "Please enter a valid Policy Number between 8 to 12 characters (eg. 000000022644)",
                "seq": "1"
            },
            {
                "parameter_name": "Client ID",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[1-9]{1}[0-9]{1,9}$",
                "error_message": "Please enter a valid numeric Client ID within 10 digits (eg. 811483)",
                "seq": "2"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/AVIVALIFE.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/AVIVALIFE.gif",
        "biller_type": "BOTH",
        "partial_pay": "Y",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "AXISMF",
        "biller_legal_name": "Axis Mutual Fund",
        "biller_name": "Axis Mutual Fund",
        "biller_location": "National",
        "biller_category": "Mutual Fund",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Unique Registration No.",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^AX[0-9A-Za-z]{6}-[0-9A-Za-z]{1,6}$",
                "error_message": "Please enter a valid Unique Registration Number (eg. AX000000-123456)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/AXISMF.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/AXISMF.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "BALIC",
        "biller_legal_name": "Bajaj Allianz Life Insurance Company Limited",
        "biller_name": "Bajaj Allianz Life",
        "biller_location": "National",
        "biller_category": "Insurance",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Policy Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{10}$",
                "error_message": "Please enter a valid 10 digit Policy Number (eg. 0000002105)",
                "seq": "1"
            },
            {
                "parameter_name": "Premium Amount",
                "data_type": "Decimal",
                "optional": "N",
                "regex": "^[0-9]{1,8}\\.[0-9]{2}$",
                "error_message": "Please enter a valid Premium Amount in Rs. Ps. format (eg.  7370.00)",
                "seq": "2"
            },
            {
                "parameter_name": "Customer Name",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[A-Za-z0-9\\#\\-\\_\\(\\.\\)\\s\\,\\&\\/\\[\\]\\\\]{5,120}$",
                "error_message": "Please enter a valid min 1 and max 120 character Customer Name (eg. ashish shetty )",
                "seq": "3"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/BALIC.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/BALIC.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "BIRSUN",
        "biller_legal_name": "Aditya Birla Sun Life Insurance Company Ltd",
        "biller_name": "Aditya Birla Sun Life Insurance",
        "biller_location": "National",
        "biller_category": "Insurance",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Policy Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{9}$",
                "error_message": "Please enter a valid 9 digit Policy Number (eg. 000000015)",
                "seq": "1"
            },
            {
                "parameter_name": "Client ID",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[A-Za-z0-9]{6,10}$",
                "error_message": "Please enter a valid Client ID between 6 to 10 characters (eg. 0523700033)",
                "seq": "2"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/BIRSUN.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/BIRSUN.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "BOIAXAMF",
        "biller_legal_name": "BOI AXA Mutual Fund",
        "biller_name": "BOI AXA Mutual Fund",
        "biller_location": "National",
        "biller_category": "Mutual Fund",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Unique Registration No.",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^BXDIRECT[\\-]{1}[0-9a-zA-Z]{1,6}$|^bxdirect[\\-]{1}[0-9a-zA-Z]{1,6}$",
                "error_message": "Please enter a valid Unique Registration Number (eg. BXDIRECT-000013)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/BOIAXAMF.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/BOIAXAMF.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "BSLMF",
        "biller_legal_name": "Birla Sun Life Mutual Fund",
        "biller_name": "Birla Sun Life Mutual Fund",
        "biller_location": "National",
        "biller_category": "Mutual Fund",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Unique Registration Number",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^BS[0-9a-zA-Z]{6,8}[\\-]{1}[0-9a-zA-Z]{1,6}$|^bs[0-9a-zA-Z]{6,8}[\\-]{1}[0-9a-zA-Z]{1,6}$",
                "error_message": "Please enter a valid Unique Registration Number (eg. 1324567890)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/BSLMF.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/BSLMF.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "CANROBMFSIP",
        "biller_legal_name": "Canara Robeco Mutual Fund",
        "biller_name": "Canara Robeco Mutual Fund",
        "biller_location": "National",
        "biller_category": "Mutual Fund",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Unique Registration No.",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^CR[A-Za-z0-9]{6}-[A-Za-z0-9]{6}$",
                "error_message": "Please enter a valid Unique Registration Number (eg. CR000000-002034)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/CANROBMFSIP.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/CANROBMFSIP.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "CONCNRNIND",
        "biller_legal_name": "Concern India Foundation Limited",
        "biller_name": "Concern India Foundation",
        "biller_location": "National",
        "biller_category": "Donation",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Name",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[0-9a-zA-Z\\s\\.]{3,40}$",
                "error_message": "Please enter a valid Name between 3 to 40 characters (eg. AARTI D SURVE)",
                "seq": "1"
            },
            {
                "parameter_name": "Address",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[A-Za-z0-9\\#\\-\\_\\(\\.\\)\\s\\,\\&\\/\\[\\]\\\\]{5,60}$",
                "error_message": "Please enter a valid Address between 5 to 60 characters (eg. New Link Road, Andheri West, Mumbai)",
                "seq": "2"
            },
            {
                "parameter_name": "Telephone Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{7,12}$",
                "error_message": "Please enter a valid numeric Telephone Number between 7 to 12 digits (eg. 9833320035 )",
                "seq": "3"
            },
            {
                "parameter_name": "PAN Number",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[A-Z]{3}[ABCPFHJLAG]{1}[A-Z]{1}[0-9]{4}[A-Z]{1}$",
                "error_message": "Please enter a valid PAN Number (e.g. AFPPS4628L) ",
                "seq": "4"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/CONCNRNIND.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/CONCNRNIND.gif",
        "biller_type": "PAYEE",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "CPAA",
        "biller_legal_name": "Cancer Patients Aid Association Limited",
        "biller_name": "Cancer Patients Aid Association",
        "biller_location": "National",
        "biller_category": "Donation",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Name",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[0-9a-zA-Z\\s\\.]{3,40}$",
                "error_message": "Please enter a valid Name between 3 to 40 characters (eg. AARTI D SURVE)",
                "seq": "1"
            },
            {
                "parameter_name": "Address Line 1",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[A-Za-z0-9\\#\\-\\_\\(\\.\\)\\s\\,\\&\\/\\[\\]\\\\]{5,60}$",
                "error_message": "Please enter a valid Address between 5 to 60 characters (eg. New Link Road, Andheri West, Mumbai)",
                "seq": "2"
            },
            {
                "parameter_name": "Address Line 2",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[A-Za-z0-9\\#\\-\\_\\(\\.\\)\\s\\,\\&\\/\\[\\]\\\\]{5,60}$",
                "error_message": "Please enter a valid Address between 5 to 60 characters (eg. New Link Road, Andheri West, Mumbai)",
                "seq": "3"
            },
            {
                "parameter_name": "Contribution Scheme",
                "data_type": "List",
                "optional": "N",
                "regex": "Cancer Screening|Patient Care",
                "error_message": "Please select a valid Contribution Scheme from the list",
                "seq": "4",
                "list_of_values": [
                    {
                        "name": "Cancer Screening",
                        "value": "Cancer Screening"
                    },
                    {
                        "name": "Patient Care",
                        "value": "Patient Care"
                    }
                ]
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/CPAA.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/CPAA.gif",
        "biller_type": "PAYEE",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "CRYREL",
        "biller_legal_name": "Child Rights And You",
        "biller_name": "Child Rights And You",
        "biller_location": "National",
        "biller_category": "Donation",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Name",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[0-9a-zA-Z\\s\\.]{3,40}$",
                "error_message": "Please enter a valid Name between 3 to 40 characters (eg. AARTI D SURVE)",
                "seq": "1"
            },
            {
                "parameter_name": "Address Line 1",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[A-Za-z0-9\\#\\-\\_\\(\\.\\)\\s\\,\\&\\/\\[\\]\\\\]{5,60}$",
                "error_message": "Please enter a valid Address between 5 to 60 characters (eg. New Link Road, Andheri West, Mumbai)",
                "seq": "2"
            },
            {
                "parameter_name": "Address Line 2",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[A-Za-z0-9\\#\\-\\_\\(\\.\\)\\s\\,\\&\\/\\[\\]\\\\]{5,60}$",
                "error_message": "Please enter a valid Address between 5 to 60 characters (eg. New Link Road, Andheri West, Mumbai)",
                "seq": "3"
            },
            {
                "parameter_name": "Contribution Scheme",
                "data_type": "List",
                "optional": "N",
                "regex": "Education|Health Care|Support",
                "error_message": "Please select a valid Contribution Scheme from the list",
                "seq": "4",
                "list_of_values": [
                    {
                        "name": "Education",
                        "value": "Education"
                    },
                    {
                        "name": "Health Care",
                        "value": "Health Care"
                    },
                    {
                        "name": "Support",
                        "value": "Support"
                    }
                ]
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/CRYREL.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/CRYREL.gif",
        "biller_type": "PAYEE",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "DOLPHIN",
        "biller_legal_name": "Mahanagar Telephone Nigam Limited - Dolphin Mumbai",
        "biller_name": "MTNL Dolphin Mumbai",
        "biller_location": "Mumbai",
        "biller_category": "Mobile Postpaid",
        "biller_reg_city": "Mumbai",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Mobile Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^91[0-9]{10}$",
                "error_message": "Please enter a valid 12 digit Mobile Number Starting with 91 (eg. 919623027125)",
                "seq": "1"
            },
            {
                "parameter_name": "Account Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{9}$",
                "error_message": "Please enter a valid 9 digit Account Number (eg. 800161544)",
                "seq": "2"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/DOLPHIN.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/DOLPHIN.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "DOLPHINDEL",
        "biller_legal_name": "Mahanagar Telephone Nigam Limited Dolphin - Delhi",
        "biller_name": "MTNL Dolphin Delhi",
        "biller_location": "Delhi NCR",
        "biller_category": "Mobile Postpaid",
        "biller_reg_city": "Delhi NCR",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Mobile Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^91[0-9]{10}$",
                "error_message": "Please enter a valid 12 digit Mobile Number Starting with 91 (eg.919623027125)",
                "seq": "1"
            },
            {
                "parameter_name": "Account Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{9}$",
                "error_message": "Please enter a valid 9 digit Account Number (eg. 910587756)",
                "seq": "2"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/DOLPHINDEL.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/DOLPHINDEL.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "DSPMF",
        "biller_legal_name": "DSP Blackrock Mutual Fund",
        "biller_name": "DSP Blackrock Mutual Fund",
        "biller_location": "National",
        "biller_category": "Mutual Fund",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Unique Registration Number",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^DS[A-Za-z0-9\\-]{13}$",
                "error_message": "Please enter a valid 13 characters Unique Registration Number (eg. DS-DIRECT0776223)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/DSPMF.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/DSPMF.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "FIDMF",
        "biller_legal_name": "Fidelity Mutual Fund",
        "biller_name": "Fidelity Mutual Fund",
        "biller_location": "National",
        "biller_category": "Mutual Fund",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Permanent Account Number (PAN)",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[A-Za-z0-9]{5,10}$",
                "error_message": "Please enter a valid Permanent Account Number (PAN) (eg. BATPS4568K)",
                "seq": "1"
            },
            {
                "parameter_name": "SIP Registration Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{5,10}$",
                "error_message": "Please enter a valid min 5 and max 10 digit SIP Registration Number (eg. 423579)",
                "seq": "2"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/FIDMF.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/FIDMF.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "FTMF",
        "biller_legal_name": "Franklin Templeton Mutual Fund",
        "biller_name": "Franklin Templeton Mutual Fund",
        "biller_location": "National",
        "biller_category": "Mutual Fund",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Unique Registration Number",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^FT[0-9a-zA-Z]{6}[\\-]{1}[0-9a-zA-Z]{1,6}$|^ft[0-9a-zA-Z]{6}[\\-]{1}[0-9a-zA-Z]{1,6}$",
                "error_message": "Please enter a valid Unique Registration Number (eg. FTARN018-122839)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/FTMF.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/FTMF.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "GARD",
        "biller_legal_name": "Mahanagar Telephone Nigam Limited CDMA - Delhi",
        "biller_name": "MTNL CDMA Delhi",
        "biller_location": "Delhi NCR",
        "biller_category": "Landline Postpaid",
        "biller_reg_city": "Delhi NCR",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Consumer Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{9}$",
                "error_message": "Please enter a valid 9 digit Consumer Number (eg. 073505032)",
                "seq": "1"
            },
            {
                "parameter_name": "Telephone Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^9111[0-9]{8}$",
                "error_message": "Please enter a valid 12 digit Telephone Number (eg. 911121211230)",
                "seq": "2"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/GARD.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/GARD.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "GIVEINDIA",
        "biller_legal_name": "Giveindia Foundation Limited",
        "biller_name": "Giveindia",
        "biller_location": "National",
        "biller_category": "Donation",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Name",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[0-9a-zA-Z\\s\\.]{3,40}$",
                "error_message": "Please enter a valid Name between 3 to 40 characters (eg. AARTI D SURVE)",
                "seq": "1"
            },
            {
                "parameter_name": "Address Line 1",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[A-Za-z0-9\\#\\-\\_\\(\\.\\)\\s\\,\\&\\/\\[\\]\\\\]{5,60}$",
                "error_message": "Please enter a valid Address between 5 to 60 characters (eg. New Link Road, Andheri West, Mumbai)",
                "seq": "2"
            },
            {
                "parameter_name": "Cause",
                "data_type": "List",
                "optional": "Y",
                "regex": "Children|Disabled|Education|Elderly|Employment|Environment|Health|Human Rights|Women|Youth",
                "error_message": "Please choose a valid cause from the drop down list (eg. Children )",
                "seq": "3",
                "list_of_values": [
                    {
                        "name": "Children",
                        "value": "Children"
                    },
                    {
                        "name": "Disabled",
                        "value": "Disabled"
                    },
                    {
                        "name": "Education",
                        "value": "Education"
                    },
                    {
                        "name": "Elderly",
                        "value": "Elderly"
                    },
                    {
                        "name": "Employment",
                        "value": "Employment"
                    },
                    {
                        "name": "Environment",
                        "value": "Environment"
                    },
                    {
                        "name": "Health",
                        "value": "Health"
                    },
                    {
                        "name": "Human Rights",
                        "value": "Human Rights"
                    },
                    {
                        "name": "Women",
                        "value": "Women"
                    },
                    {
                        "name": "Youth",
                        "value": "Youth"
                    }
                ]
            },
            {
                "parameter_name": "Email ID",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[\\w-]+(?:\\.[\\w-]+)*@(?:[\\w-]+\\.)+[a-zA-Z]{2,50}$",
                "error_message": "Please enter a valid Email ID (eg. ram56@hotmail.com) ",
                "seq": "4"
            },
            {
                "parameter_name": "Mobile Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[1-9]{1}[0-9]{9}$",
                "error_message": "Please enter a valid 10 digit Mobile Number (eg. 9123467895 )",
                "seq": "5"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/GIVEINDIA.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/GIVEINDIA.gif",
        "biller_type": "PAYEE",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "HDFCERGO",
        "biller_legal_name": "HDFC ERGO General Insurance Company Limited",
        "biller_name": "HDFC ERGO General Insurance",
        "biller_location": "National",
        "biller_category": "Insurance",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Policy Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{14}$",
                "error_message": "Please enter a first 14 digits of Policy Number (eg. 11122244000123)",
                "seq": "1"
            },
            {
                "parameter_name": "Expiry Date",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^(?=\\d{2}([-.,\\/])\\d{2}\\1\\d{4}$)(?:0[1-9]|1\\d|[2][0-8]|29(?!.02.(?!(?!(?:[02468][1-35-79]|[13579][0-13-57-9])00)\\d{2}(?:[02468][048]|[13579][26])))|30(?!.02)|31(?=.(?:0[13578]|10|12))).(?:0[1-9]|1[012]).\\d{4}$",
                "error_message": "Please enter a valid Expiry Date in DD/MM/YYYY format (eg. 20/08/2015)",
                "seq": "2"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/HDFCERGO.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/HDFCERGO.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "HDFCSL",
        "biller_legal_name": "HDFC Life Insurance Company Limited",
        "biller_name": "HDFC Life Insurance",
        "biller_location": "National",
        "biller_category": "Insurance",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Policy Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{8}$",
                "error_message": "Please enter a valid 8 digit Policy Number (eg. 00000008)",
                "seq": "1"
            },
            {
                "parameter_name": "Date of Birth",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^(?=\\d{2}([-.,\\/])\\d{2}\\1\\d{4}$)(?:0[1-9]|1\\d|[2][0-8]|29(?!.02.(?!(?!(?:[02468][1-35-79]|[13579][0-13-57-9])00)\\d{2}(?:[02468][048]|[13579][26])))|30(?!.02)|31(?=.(?:0[13578]|10|12))).(?:0[1-9]|1[012]).\\d{4}$",
                "error_message": "Please enter a valid Date of Birth in DD/MM/YYYY format (eg. 28/07/1978)",
                "seq": "2"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/HDFCSL.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/HDFCSL.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "HELPAGE",
        "biller_legal_name": "Helpage India",
        "biller_name": "Helpage India",
        "biller_location": "National",
        "biller_category": "Donation",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Name",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[0-9a-zA-Z\\s\\.]{3,40}$",
                "error_message": "Please enter a valid Name between 3 to 40 characters (eg. AARTI D SURVE)",
                "seq": "1"
            },
            {
                "parameter_name": "Address Line 1",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[A-Za-z0-9\\#\\-\\_\\(\\.\\)\\s\\,\\&\\/\\[\\]\\\\]{5,60}$",
                "error_message": "Please enter a valid Address between 5 to 60 characters (eg. New Link Road, Andheri West, Mumbai)",
                "seq": "2"
            },
            {
                "parameter_name": "Address Line 2",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[A-Za-z0-9\\#\\-\\_\\(\\.\\)\\s\\,\\&\\/\\[\\]\\\\]{5,60}$",
                "error_message": "Please enter a valid Address between 5 to 60 characters (eg. New Link Road, Andheri West, Mumbai)",
                "seq": "3"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/HELPAGE.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/HELPAGE.gif",
        "biller_type": "PAYEE",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "MTNLDELPRE",
        "biller_legal_name": "Mahanagar Telephone Nigam Limited Delhi - Prepaid",
        "biller_name": "MTNL Delhi Prepaid",
        "biller_location": "National",
        "biller_category": "Mobile Prepaid",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Mobile Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{10}$",
                "error_message": "Please enter a valid 10 digit Mobile Number (eg. 7428222238)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/MTNLDELPRE.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/MTNLDELPRE.gif",
        "biller_type": "PAYEE",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "Y",
        "isbillerbbps": "N",
        "paymentamount_validation": "Y",
        "additional_validation_details": [
            {
                "parameter_name": "Recharge Type",
                "data_type": "List",
                "optional": "N",
                "regex": "1|3",
                "error_message": "Please enter valid Recharge Type",
                "list_of_values": [
                    {
                        "name": "TopUp",
                        "value": "1"
                    },
                    {
                        "name": "Special Recharge",
                        "value": "3"
                    }
                ]
            }
        ]
    },
    {
        "objectid": "biller",
        "billerid": "HESCOM",
        "biller_legal_name": "Hubli Electricity",
        "biller_name": "Hubli Electricity",
        "biller_location": "Karnataka",
        "biller_category": "Electricity",
        "biller_reg_city": "Karnataka",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            }
        ],
        "biller_status": "INACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "RR Number",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[A-Za-z0-9]{1,14}$",
                "error_message": "Please enter valid Consumer id/Meter number having minimum length 8 and maximum length 12 characters long(eg ASD9F9F6NL)",
                "seq": "1"
            },
            {
                "parameter_name": "Location Code",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[0-9]{1,3}$",
                "error_message": "Please enter a valid Location Code (e.g. 435)",
                "seq": "2"
            }
        ],
        "biller_logo": "https://uat.billdesk.com/images/billerlogo/HESCOM.gif",
        "biller_bill_copy": "https://uat.billdesk.com/images/billcopy/HESCOM.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "HSBCLIFE",
        "biller_legal_name": "Canara HSBC OBC Life Insurance Company Limited",
        "biller_name": "Canara HSBC OBC Life",
        "biller_location": "National",
        "biller_category": "Insurance",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Policy Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{10}$",
                "error_message": "Please enter a valid 10 digit Policy Number (eg. 0000063915)",
                "seq": "1"
            },
            {
                "parameter_name": "Contact Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{7,12}$",
                "error_message": "Please enter a valid min 7 and max 12 digit Contact Number (eg. 9845372206)",
                "seq": "2"
            },
            {
                "parameter_name": "Customer Name",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[0-9a-zA-Z\\s\\.]{3,100}$",
                "error_message": "Please enter a valid min 3 and max 100 character Customer Name (eg. LATA RAVIKUMAR )",
                "seq": "3"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/HSBCLIFE.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/HSBCLIFE.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "HYMWSS",
        "biller_legal_name": "Hyderabad Metro Water Supply And Sewerage Board",
        "biller_name": "Hyderabad Metro Water Supply",
        "biller_location": "Hyderabad",
        "biller_category": "Water",
        "biller_reg_city": "Andhra Pradesh",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Customer Account Number (CAN)",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{9}$",
                "error_message": "Please enter a valid 9 Customer Account Number (eg. 000000046)",
                "seq": "1"
            },
            {
                "parameter_name": "Customer Name",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[a-zA-Z\\s\\.]{1,120}$",
                "error_message": "Please enter a valid min 1 and max 120 character Customer Name (eg. Anuj Tripathi)",
                "seq": "2"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/HYMWSS.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/HYMWSS.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "ICICIPRUMF",
        "biller_legal_name": "ICICI Prudential Mutual Fund",
        "biller_name": "ICICI Prudential Mutual Fund",
        "biller_location": "National",
        "biller_category": "Mutual Fund",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Unique Registration No.",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[A-Za-z0-9\\-]{10,15}$",
                "error_message": "Please enter a valid Unique Registration No. between 10 to 15 characters (eg. 1-8188280396)",
                "seq": "1"
            },
            {
                "parameter_name": "Transaction ID",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[A-Za-z0-9]{1,15}$",
                "error_message": "Please enter a valid min 1 and max 15 character transaction ID (eg. 5822095)",
                "seq": "2"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/ICICIPRUMF.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/ICICIPRUMF.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "IDBIMFSIP",
        "biller_legal_name": "IDBI Mutual Fund",
        "biller_name": "IDBI Mutual Fund",
        "biller_location": "National",
        "biller_category": "Mutual Fund",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Unique Registration No.",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^IB[0-9a-zA-Z]{6}[\\-]{1}[0-9a-zA-Z]{6}$",
                "error_message": "Please enter a valid Unique Registration No. (eg. IB000010-A01794)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/IDBIMFSIP.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/IDBIMFSIP.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "IDFCMF",
        "biller_legal_name": "IDFC Mutual Fund",
        "biller_name": "IDFC Mutual Fund",
        "biller_location": "National",
        "biller_category": "Mutual Fund",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Unique Registration No.",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^ID[0-9a-zA-Z]{6}[\\-]{1}[0-9a-zA-Z]{1,6}$",
                "error_message": "Please enter a valid Unique Registration No. (eg. ID069583-100405)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/IDFCMF.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/IDFCMF.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "IN2CAB",
        "biller_legal_name": "In2Cable Limited",
        "biller_name": "In2Cable",
        "biller_location": "National",
        "biller_category": "Broadband Postpaid",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Customer ID",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[A-Za-z0-9]{1,10}$",
                "error_message": "Please enter a valid Customer ID within 10 characters (eg 1072566936)",
                "seq": "1"
            },
            {
                "parameter_name": "Name (email id)",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[\\w-]+(?:\\.[\\w-]+)*@(?:[\\w-]+\\.)+[a-zA-Z]{2,50}$",
                "error_message": "Please enter a valid min 2 and max 50 character Name (email id) (eg. shahzadk90@gmail.com)",
                "seq": "2"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/IN2CAB.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/IN2CAB.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "INDTOD",
        "biller_legal_name": "India Today",
        "biller_name": "India Today",
        "biller_location": "National",
        "biller_category": "Subscription",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Name",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[0-9a-zA-Z\\s\\.]{3,40}$",
                "error_message": "Please enter a valid min 3 and max 120 Name (eg. 9042629834)",
                "seq": "1"
            },
            {
                "parameter_name": "Address Line 1",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[A-Za-z0-9\\#\\-\\_\\(\\.\\)\\s\\,\\&\\/\\[\\]\\\\]{5,60}$",
                "error_message": "Please enter a valid min 5 and max 40 character Address (eg. eriputhur)",
                "seq": "2"
            },
            {
                "parameter_name": "Address Line 2",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[A-Za-z0-9\\#\\-\\_\\(\\.\\)\\s\\,\\&\\/\\[\\]\\\\]{5,60}$",
                "error_message": "Please enter a valid min 5 and max 40 character Address (eg. 7/7 I Flr, Old Rajinder Nagar, N D-60 )",
                "seq": "3"
            },
            {
                "parameter_name": "Subscription Scheme",
                "data_type": "List",
                "optional": "N",
                "regex": "India Today English 1 Year - Rs. 2340.00|India Today Hindi 1 Year - Rs. 1320.00|Auto Today 1 Year - Rs. 1080.00|Business Today 1 Year - Rs. 1199.00|Robb Report 1 Year - Rs. 6000.00",
                "error_message": "Please select a valid Subscription Scheme",
                "seq": "4",
                "list_of_values": [
                    {
                        "name": "India Today English 1 Year - Rs. 2340.00",
                        "value": "India Today English 1 Year - Rs. 2340.00"
                    },
                    {
                        "name": "India Today Hindi 1 Year - Rs. 1320.00",
                        "value": "India Today Hindi 1 Year - Rs. 1320.00"
                    },
                    {
                        "name": "Auto Today 1 Year - Rs. 1080.00",
                        "value": "Auto Today 1 Year - Rs. 1080.00"
                    },
                    {
                        "name": "Business Today 1 Year - Rs. 1199.00",
                        "value": "Business Today 1 Year - Rs. 1199.00"
                    },
                    {
                        "name": "Robb Report 1 Year - Rs. 6000.00",
                        "value": "Robb Report 1 Year - Rs. 6000.00"
                    }
                ]
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/INDTOD.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/INDTOD.gif",
        "biller_type": "PAYEE",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "JUSCOSARAI",
        "biller_legal_name": "Jamshedpur Utilities And Services Company Limited- Saraikela",
        "biller_name": "JUSCO - Saraikela",
        "biller_location": "Saraikela",
        "biller_category": "Electricity",
        "biller_reg_city": "Jharkhand",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Business Partner Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{10}$",
                "error_message": "Please enter a valid 10 digit Business Partner Number (e.g. 0000100010)",
                "seq": "1"
            },
            {
                "parameter_name": "Business Partner Name",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[A-Za-z0-9\\#\\-\\_\\(\\.\\)\\s\\,\\&\\/]{1,30}$",
                "error_message": "Please enter a valid Business Partner Name within 1 to 30 characters (eg. AUTO RUBBER AND PLASTIC)",
                "seq": "2"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/JUSCOSARAI.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/JUSCOSARAI.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "KESCO",
        "biller_legal_name": "Kanpur Electricity Supply Company Limited",
        "biller_name": "Kanpur Electricity Supply (KESCO)",
        "biller_location": "Kanpur",
        "biller_category": "Electricity",
        "biller_reg_city": "Uttar Pradesh",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "N"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "N"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "N"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Account Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{8,15}$",
                "error_message": "Please enter a valid numeric Account Number that is between 8 to 15 digits (eg 82028813)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/KESCO.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/KESCO.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "Y",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "KOTAKMFSIP",
        "biller_legal_name": "Kotak Mutual Fund",
        "biller_name": "Kotak Mutual Fund",
        "biller_location": "National",
        "biller_category": "Mutual Fund",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Unique Registration No.",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^KT[0-9a-zA-Z]{6}[\\-]{1}[0-9a-zA-Z]{6}$",
                "error_message": "Please enter a valid Unique Registration Number (eg. KT036671-036671)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/KOTAKMFSIP.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/KOTAKMFSIP.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "LICIND",
        "biller_legal_name": "Life Insurance Corporation Of India",
        "biller_name": "LIC India",
        "biller_location": "National",
        "biller_category": "Insurance",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Policy Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{9}$",
                "error_message": "Please enter a valid 9 digit Policy Number (eg. 000012179)",
                "seq": "1"
            },
            {
                "parameter_name": "Installment Premium",
                "data_type": "Decimal",
                "optional": "N",
                "regex": "^[0-9]{1,8}\\.[0-9]{2}$",
                "error_message": "Please enter a valid Instalment Premium in Rs.Ps format (eg. 1000.00)",
                "seq": "2"
            },
            {
                "parameter_name": "Email ID",
                "data_type": "AlphaNumeric",
                "optional": "Y",
                "regex": "^[\\w-]+(?:\\.[\\w-]+)*@(?:[\\w-]+\\.)+[a-zA-Z]{2,50}$",
                "error_message": "Please enter a valid Email ID (eg. defence99000@gmail.com )",
                "seq": "3"
            },
            {
                "parameter_name": "Receipt Type",
                "data_type": "List",
                "optional": "Y",
                "regex": "E|P",
                "error_message": "Please select a valid Receipt Type",
                "seq": "4",
                "list_of_values": [
                    {
                        "name": "E",
                        "value": "E"
                    },
                    {
                        "name": "P",
                        "value": "P"
                    }
                ]
            },
            {
                "parameter_name": "Mobile Number",
                "data_type": "Numeric",
                "optional": "Y",
                "regex": "^[0-9]{10}$",
                "error_message": "Please enter a valid 10 digit Mobile Number (eg. 9471071148 )",
                "seq": "5"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/LICIND.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/LICIND.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "LNTMF",
        "biller_legal_name": "Lnt Mutual Fund",
        "biller_name": "LNT Mutual Fund",
        "biller_location": "National",
        "biller_category": "Mutual Fund",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Permanent Account Number (PAN)",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[A-Za-z0-9]{5,10}$",
                "error_message": "Please enter a valid Permanent Account Number (PAN) (eg. BATPS4568K)",
                "seq": "1"
            },
            {
                "parameter_name": "SIP Registration Number",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[0-9]{5,10}$",
                "error_message": "Please enter a valid min 5 and max 10 character SIP Registration Number (eg. 20089573)",
                "seq": "2"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/LNTMF.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/LNTMF.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "MAHATEMPLE",
        "biller_legal_name": "Mahalaxmi Temple Kolhapur",
        "biller_name": "Mahalaxmi Temple Kolhapur",
        "biller_location": "National",
        "biller_category": "Donation",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Name",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[0-9a-zA-Z\\s\\.]{3,40}$",
                "error_message": "Please enter a valid Name between 3 to 40 characters (eg. AARTI D SURVE)",
                "seq": "1"
            },
            {
                "parameter_name": "Address",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[A-Za-z0-9\\#\\-\\_\\(\\.\\)\\s\\,\\&\\/\\[\\]\\\\]{5,60}$",
                "error_message": "Please enter a valid Address between 5 to 60 characters (eg. New Link Road, Andheri West, Mumbai)",
                "seq": "2"
            },
            {
                "parameter_name": "Mobile Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[1-9]{1}[0-9]{9}$",
                "error_message": "Please enter a valid numeric Telephone Number between 7 to 12 digits (eg. 9833320035 )",
                "seq": "3"
            },
            {
                "parameter_name": "Email ID",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[\\w-]+(?:\\.[\\w-]+)*@(?:[\\w-]+\\.)+[a-zA-Z]{2,50}$",
                "error_message": "Please enter a valid Email ID (eg. ram56@hotmail.com) ",
                "seq": "4"
            },
            {
                "parameter_name": "PAN",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[A-Z]{3}(P|C|H|F|A|T|B|L|J|G){1}[A-Z]{1}[0-9]{4}[A-Z]{1}$",
                "error_message": "Please enter a valid PAN Number (eg. BDAPA6770M )",
                "seq": "5"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/MAHATEMPLE.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/MAHATEMPLE.gif",
        "biller_type": "PAYEE",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "MIRASSMFSIP",
        "biller_legal_name": "Mirae Asset Mutual Fund",
        "biller_name": "Mirae Asset Mutual Fund",
        "biller_location": "National",
        "biller_category": "Mutual Fund",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Unique Registration No.",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^MA[0-9a-zA-Z]{6}[\\-]{1}[0-9a-zA-Z]{6}$",
                "error_message": "Please enter a valid Unique Registration Number (eg. MA000000-A09789)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/MIRASSMFSIP.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/MIRASSMFSIP.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "MNYL",
        "biller_legal_name": "Max Life Insurance Company Limited",
        "biller_name": "Max Life Insurance",
        "biller_location": "National",
        "biller_category": "Insurance",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Policy Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{9}$",
                "error_message": "Please enter a valid 9 digit Policy Number (eg. 000025112)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/MNYL.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/MNYL.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "MOAMCISIP",
        "biller_legal_name": "Motilal Oswal Asset Management",
        "biller_name": "Motilal Oswal Asset Management",
        "biller_location": "National",
        "biller_category": "Mutual Fund",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Unique Registration No.",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^MO[0-9a-zA-Z]{6}[\\-]{1}[0-9a-zA-Z]{6}$",
                "error_message": "Please enter a valid Unique Registration Number (eg. MO000000-A04331)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/MOAMCISIP.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/MOAMCISIP.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "MTNLGARUDA",
        "biller_legal_name": "Mahanagar Telephone Nigam Limited - Garuda Mumbai",
        "biller_name": "MTNL Garuda Mumbai",
        "biller_location": "Mumbai",
        "biller_category": "Mobile Postpaid",
        "biller_reg_city": "Mumbai",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Mobile Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^2[0-9]{7}$",
                "error_message": "Please enter a valid 8 digit Mobile Number start with 2 (eg. 20040361)",
                "seq": "1"
            },
            {
                "parameter_name": "Account Number",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^2[0-9]{7,9}$",
                "error_message": "Please enter a valid min 7 and max 9 character Account Number (eg. 23456789)",
                "seq": "2"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/MTNLGARUDA.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/MTNLGARUDA.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "NAB",
        "biller_legal_name": "National Association For The Blind",
        "biller_name": "National Association For The Blind",
        "biller_location": "National",
        "biller_category": "Donation",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Name",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[0-9a-zA-Z\\s\\.]{3,40}$",
                "error_message": "Please enter a valid Name between 3 to 40 characters (eg. AARTI D SURVE)",
                "seq": "1"
            },
            {
                "parameter_name": "Address Line 1",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[A-Za-z0-9\\#\\-\\_\\(\\.\\)\\s\\,\\&\\/\\[\\]\\\\]{5,60}$",
                "error_message": "Please enter a valid Address between 5 to 60 characters (eg. New Link Road, Andheri West, Mumbai)",
                "seq": "2"
            },
            {
                "parameter_name": "Address Line 2",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[A-Za-z0-9\\#\\-\\_\\(\\.\\)\\s\\,\\&\\/\\[\\]\\\\]{5,60}$",
                "error_message": "Please enter a valid Address between 5 to 60 characters (eg. New Link Road, Andheri West, Mumbai)",
                "seq": "3"
            },
            {
                "parameter_name": "Contribution Scheme",
                "data_type": "List",
                "optional": "N",
                "regex": "Education|Braille Books|Spectales|Talking Books|Medicare|Others",
                "error_message": "Please select a valid Contribution Scheme from the list",
                "seq": "4",
                "list_of_values": [
                    {
                        "name": "Education",
                        "value": "Education"
                    },
                    {
                        "name": "Braille Books",
                        "value": "Braille Books"
                    },
                    {
                        "name": "Spectales",
                        "value": "Spectales"
                    },
                    {
                        "name": "Talking Books",
                        "value": "Talking Books"
                    },
                    {
                        "name": "Medicare",
                        "value": "Medicare"
                    },
                    {
                        "name": "Others",
                        "value": "Others"
                    }
                ]
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/NAB.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/NAB.gif",
        "biller_type": "PAYEE",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "OMKMLI",
        "biller_legal_name": "Kotak Mahindra Life Insurance Company Ltd",
        "biller_name": "Kotak Life Insurance",
        "biller_location": "National",
        "biller_category": "Insurance",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Policy Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{12}$",
                "error_message": "Please enter a valid 12 digit Policy Number (eg. 000000000180)",
                "seq": "1"
            },
            {
                "parameter_name": "Client ID",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[A,N,M]{1}[0-9]{7}$|^[1-9]{1}[0-9]{7}$",
                "error_message": "Please enter a valid 8 character Client ID (eg. 89997884)",
                "seq": "2"
            },
            {
                "parameter_name": "Installment Premium",
                "data_type": "Decimal",
                "optional": "N",
                "regex": "^(^[0-9]{1,8}\\.[0-9]{2})$",
                "error_message": "Please enter a valid Installment Premium in Rs.Ps format (eg. 2000.00 )",
                "seq": "3"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/OMKMLI.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/OMKMLI.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "PETA",
        "biller_legal_name": "People For Ethical Treatment of Animals",
        "biller_name": "PETA - India",
        "biller_location": "National",
        "biller_category": "Donation",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Name",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[0-9a-zA-Z\\s\\.]{3,40}$",
                "error_message": "Please enter a valid Name between 3 to 40 characters (eg. AARTI D SURVE)",
                "seq": "1"
            },
            {
                "parameter_name": "Address Line 1",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[A-Za-z0-9\\#\\-\\_\\(\\.\\)\\s\\,\\&\\/\\[\\]\\\\]{5,60}$",
                "error_message": "Please enter a valid Address between 5 to 60 characters (eg. New Link Road, Andheri West, Mumbai)",
                "seq": "2"
            },
            {
                "parameter_name": "Address Line 2",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[A-Za-z0-9\\#\\-\\_\\(\\.\\)\\s\\,\\&\\/\\[\\]\\\\]{5,60}$",
                "error_message": "Please enter a valid Address between 5 to 60 characters (eg. New Link Road, Andheri West, Mumbai)",
                "seq": "3"
            },
            {
                "parameter_name": "Contribution Scheme",
                "data_type": "List",
                "optional": "N",
                "regex": "Member|Donation Only",
                "error_message": "Please select a valid Contribution Scheme from the list",
                "seq": "4",
                "list_of_values": [
                    {
                        "name": "Member",
                        "value": "Member"
                    },
                    {
                        "name": "Donation Only",
                        "value": "Donation Only"
                    }
                ]
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/PETA.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/PETA.gif",
        "biller_type": "PAYEE",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "PMF",
        "biller_legal_name": "Principal Mutual Fund",
        "biller_name": "Principal Mutual Fund",
        "biller_location": "National",
        "biller_category": "Mutual Fund",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Unique Registration Number",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[A-Za-z0-9\\-]{10,15}$",
                "error_message": "Please enter a valid Unique Registration Number between 10 to 15 characters (eg. 15770340013466)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/PMF.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/PMF.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "BSNLPRE",
        "biller_legal_name": "Bharat Sanchar Nigam Limited - Prepaid",
        "biller_name": "BSNL  Prepaid ",
        "biller_location": "National",
        "biller_category": "Mobile Prepaid",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Mobile Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{10}$",
                "error_message": "Please enter a valid 10 digit Mobile Number (eg. 0940763946)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/BSNLPRE.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/BSNLPRE.gif",
        "biller_type": "PAYEE",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "Y",
        "isbillerbbps": "N",
        "paymentamount_validation": "Y",
        "additional_validation_details": [
            {
                "parameter_name": "Recharge Type",
                "data_type": "List",
                "optional": "N",
                "regex": "1|3",
                "error_message": "Please enter valid Recharge Type",
                "list_of_values": [
                    {
                        "name": "TopUp",
                        "value": "1"
                    },
                    {
                        "name": "Special Recharge",
                        "value": "3"
                    }
                ]
            }
        ]
    },
    {
        "objectid": "biller",
        "billerid": "IDEAPRE",
        "biller_legal_name": "Idea Cellular Limited - Prepaid",
        "biller_name": "Idea Prepaid",
        "biller_location": "National",
        "biller_category": "Mobile Prepaid",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Mobile Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{10}$",
                "error_message": "Please enter a valid 10 digit Mobile Number (eg. 0729793276)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/IDEAPRE.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/IDEAPRE.gif",
        "biller_type": "PAYEE",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "Y",
        "isbillerbbps": "N",
        "paymentamount_validation": "Y"
    },
    {
        "objectid": "biller",
        "billerid": "PMNRF",
        "biller_legal_name": "Prime Minister Relief Fund",
        "biller_name": "Prime Minister Relief Fund",
        "biller_location": "National",
        "biller_category": "Donation",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Name",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[0-9a-zA-Z\\s\\.]{3,40}$",
                "error_message": "Please enter a valid Name between 3 to 40 characters (eg. AARTI D SURVE)",
                "seq": "1"
            },
            {
                "parameter_name": "Address Line 1",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[A-Za-z0-9\\#\\-\\_\\(\\.\\)\\s\\,\\&\\/\\[\\]\\\\]{5,60}$",
                "error_message": "Please enter a valid Address between 5 to 60 characters (eg. New Link Road, Andheri West, Mumbai)",
                "seq": "2"
            },
            {
                "parameter_name": "Address Line 2",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[A-Za-z0-9\\#\\-\\_\\(\\.\\)\\s\\,\\&\\/\\[\\]\\\\]{5,60}$",
                "error_message": "Please enter a valid Address between 5 to 60 characters (eg. New Link Road, Andheri West, Mumbai)",
                "seq": "3"
            },
            {
                "parameter_name": "Email ID",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[\\w-]+(?:\\.[\\w-]+)*@(?:[\\w-]+\\.)+[a-zA-Z]{2,50}$",
                "error_message": "Please enter a valid Email ID (eg. ram56@hotmail.com) ",
                "seq": "4"
            },
            {
                "parameter_name": "Telephone Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{7,12}$",
                "error_message": "Please enter a valid numeric Telephone Number between 7 to 12 digits (eg. 9123467895 )",
                "seq": "5"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/PMNRF.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/PMNRF.gif",
        "biller_type": "PAYEE",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "PPFASMFSIP",
        "biller_legal_name": "PPFAS Mutual Fund",
        "biller_name": "PPFAS Mutual Fund",
        "biller_location": "National",
        "biller_category": "Mutual Fund",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "PAN NO.",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[A-Z]{3}(P|C|H|F|A|T|B|L|J|G){1}[A-Z]{1}[0-9]{4}[A-Z]{1}$",
                "error_message": "Please enter a valid Permanent Account Number (PAN) (eg. BATPS4568K)",
                "seq": "1"
            },
            {
                "parameter_name": "SRN",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[0-9a-zA-Z]{1,8}$",
                "error_message": "Please enter a valid min 1 and max 8 character SRN (eg. 801077)",
                "seq": "2"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/PPFASMFSIP.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/PPFASMFSIP.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "PRIDE",
        "biller_legal_name": "Planning Rural-Urban Integrated Dev Education India",
        "biller_name": "PRIDE India",
        "biller_location": "National",
        "biller_category": "Donation",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Name",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[0-9a-zA-Z\\s\\.]{3,40}$",
                "error_message": "Please enter a valid Name between 3 to 40 characters (eg. AARTI D SURVE)",
                "seq": "1"
            },
            {
                "parameter_name": "Address Line 1",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[A-Za-z0-9\\#\\-\\_\\(\\.\\)\\s\\,\\&\\/\\[\\]\\\\]{5,60}$",
                "error_message": "Please enter a valid Address between 5 to 60 characters (eg. New Link Road, Andheri West, Mumbai)",
                "seq": "2"
            },
            {
                "parameter_name": "Address Line 2",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[A-Za-z0-9\\#\\-\\_\\(\\.\\)\\s\\,\\&\\/\\[\\]\\\\]{5,60}$",
                "error_message": "Please enter a valid Address between 5 to 60 characters (eg. New Link Road, Andheri West, Mumbai)",
                "seq": "3"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/PRIDE.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/PRIDE.gif",
        "biller_type": "PAYEE",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "QUANTMF",
        "biller_legal_name": "Quantum Mutual Fund",
        "biller_name": "Quantum Mutual Fund",
        "biller_location": "National",
        "biller_category": "Mutual Fund",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Unique Registration Number",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[A-Za-z0-9\\-]{10,15}$",
                "error_message": "Please enter a valid Unique Registration Number between 10 to 15 characters (eg. 9991511962)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/QUANTMF.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/QUANTMF.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "READIG",
        "biller_legal_name": "Readers Digest",
        "biller_name": "Readers Digest",
        "biller_location": "National",
        "biller_category": "Subscription",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Name",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[0-9a-zA-Z\\s\\.]{3,40}$",
                "error_message": "Please enter a valid Name between 3 to 40 characters (eg. AARTI D SURVE)",
                "seq": "1"
            },
            {
                "parameter_name": "Address Line 1",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[A-Za-z0-9\\#\\-\\_\\(\\.\\)\\s\\,\\&\\/\\[\\]\\\\]{5,60}$",
                "error_message": "Please enter a valid min 5 and max 40 character Address (eg. JAITU)",
                "seq": "2"
            },
            {
                "parameter_name": "Address Line 2",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[A-Za-z0-9\\#\\-\\_\\(\\.\\)\\s\\,\\&\\/\\[\\]\\\\]{5,60}$",
                "error_message": "Please enter a valid min 5 and max 40 character Address (eg. 7/7 I Flr, Old Rajinder Nagar, N D-60 )",
                "seq": "3"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/READIG.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/READIG.gif",
        "biller_type": "PAYEE",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "RMF",
        "biller_legal_name": "Reliance Mutual Fund",
        "biller_name": "Reliance Mutual Fund",
        "biller_location": "National",
        "biller_category": "Mutual Fund",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Unique Registration Number",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^RM[0-9a-zA-Z]{6}[\\-]{1}[0-9a-zA-Z]{1,6}$|^rm[0-9a-zA-Z]{6}[\\-]{1}[0-9a-zA-Z]{1,6}$",
                "error_message": "Please enter a valid Unique Registration Number (eg. RM000000-A13350)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/RMF.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/RMF.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "RTNCARD",
        "biller_legal_name": "Ratnakar Bank Limited - Card",
        "biller_name": "Ratnakar Bank Credit Card",
        "biller_location": "National",
        "biller_category": "Credit Card",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "N"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "N"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "RBL Card Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^523950[0-9]{10}$|^524373[0-9]{10}$|^541538[0-9]{10}$|^542505[0-9]{10}$|^547827[0-9]{10}$|^523650[0-9]{10}$",
                "error_message": "Please enter a valid 16 digit RBL Card Number (eg. 523650XXXXXX0013)",
                "seq": "1",
                "encryption_required": "Y"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/RTNCARD.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/RTNCARD.gif",
        "biller_type": "PAYEE",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "SAVE",
        "biller_legal_name": "Save The Children India",
        "biller_name": "SAVE The Children India",
        "biller_location": "National",
        "biller_category": "Donation",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Name",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[0-9a-zA-Z\\s\\.]{3,40}$",
                "error_message": "Please enter a valid Name between 3 to 40 characters (eg. AARTI D SURVE)",
                "seq": "1"
            },
            {
                "parameter_name": "Address Line 1",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[A-Za-z0-9\\#\\-\\_\\(\\.\\)\\s\\,\\&\\/\\[\\]\\\\]{5,60}$",
                "error_message": "Please enter a valid Address between 5 to 60 characters (eg. New Link Road, Andheri West, Mumbai)",
                "seq": "2"
            },
            {
                "parameter_name": "Address Line 2",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[A-Za-z0-9\\#\\-\\_\\(\\.\\)\\s\\,\\&\\/\\[\\]\\\\]{5,60}$",
                "error_message": "Please enter a valid Address between 5 to 60 characters (eg. New Link Road, Andheri West, Mumbai)",
                "seq": "3"
            },
            {
                "parameter_name": "Contribution Scheme",
                "data_type": "List",
                "optional": "N",
                "regex": "Daily Nutritious Meal|Vocational Training|Health Care|Support",
                "error_message": "Please select a valid Contribution Scheme from the list",
                "seq": "4",
                "list_of_values": [
                    {
                        "name": "Daily Nutritious Meal",
                        "value": "Daily Nutritious Meal"
                    },
                    {
                        "name": "Vocational Training",
                        "value": "Vocational Training"
                    },
                    {
                        "name": "Health Care",
                        "value": "Health Care"
                    },
                    {
                        "name": "Support",
                        "value": "Support"
                    }
                ]
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/SAVE.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/SAVE.gif",
        "biller_type": "PAYEE",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "SBIMF",
        "biller_legal_name": "SBI Mutual Fund",
        "biller_name": "SBI Mutual Fund",
        "biller_location": "National",
        "biller_category": "Mutual Fund",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Unique Registration Number",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^SB[0-9a-zA-Z]{6}[\\-]{1}[0-9a-zA-Z]{1,6}$|^sb[0-9a-zA-Z]{6}[\\-]{1}[0-9a-zA-Z]{1,6}$",
                "error_message": "Please enter a valid Unique Registration Number (eg. SB000000-018399)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/SBIMF.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/SBIMF.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "SDHGTRUST",
        "biller_legal_name": "Shreemant Dagduseth Halwai Ganpati Trust",
        "biller_name": "Shreemant Dagduseth Halwai Ganpati Trust",
        "biller_location": "National",
        "biller_category": "Donation",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Name",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[0-9a-zA-Z\\s\\.]{3,40}$",
                "error_message": "Please enter a valid Name between 3 to 40 characters (eg. AARTI D SURVE)",
                "seq": "1"
            },
            {
                "parameter_name": "Address",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[A-Za-z0-9\\#\\-\\_\\(\\.\\)\\s\\,\\&\\/\\[\\]\\\\]{5,60}$",
                "error_message": "Please enter a valid Address between 5 to 60 characters (eg. New Link Road, Andheri West, Mumbai)",
                "seq": "2"
            },
            {
                "parameter_name": "Mobile Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[1-9]{1}[0-9]{9}$",
                "error_message": "Please enter a valid numeric Telephone Number between 7 to 12 digits (eg. 9833320035 )",
                "seq": "3"
            },
            {
                "parameter_name": "Email ID",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[\\w-]+(?:\\.[\\w-]+)*@(?:[\\w-]+\\.)+[a-zA-Z]{2,50}$",
                "error_message": "Please enter a valid Email ID (eg. ram56@hotmail.com) ",
                "seq": "4"
            },
            {
                "parameter_name": "PAN",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[A-Z]{3}(P|C|H|F|A|T|B|L|J|G){1}[A-Z]{1}[0-9]{4}[A-Z]{1}$",
                "error_message": "Please enter a valid PAN Number (eg. APDPG3252Q )",
                "seq": "5"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/SDHGTRUST.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/SDHGTRUST.gif",
        "biller_type": "PAYEE",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "SEVALAYA",
        "biller_legal_name": "Sevalaya",
        "biller_name": "Sevalaya",
        "biller_location": "National",
        "biller_category": "Donation",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Name",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[0-9a-zA-Z\\s\\.]{3,40}$",
                "error_message": "Please enter a valid Name between 3 to 40 characters (eg. AARTI D SURVE)",
                "seq": "1"
            },
            {
                "parameter_name": "Address",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[A-Za-z0-9\\#\\-\\_\\(\\.\\)\\s\\,\\&\\/\\[\\]\\\\]{5,60}$",
                "error_message": "Please enter a valid Address between 5 to 60 characters (eg. New Link Road, Andheri West, Mumbai)",
                "seq": "2"
            },
            {
                "parameter_name": "Telephone Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{7,12}$",
                "error_message": "Please enter a valid numeric Telephone Number between 7 to 12 digits (eg. 9833320035 )",
                "seq": "3"
            },
            {
                "parameter_name": "Donor Options",
                "data_type": "List",
                "optional": "N",
                "regex": "Childrens Home for poor orphan children|Poor Rural Children Education|Old Age Home  for destitute poor senior citizens|GOSHALA sheltering dry cows|Primary School Building Project",
                "error_message": "Please select a valid Donor Options",
                "seq": "4",
                "list_of_values": [
                    {
                        "name": "Childrens Home for poor orphan children",
                        "value": "Childrens Home for poor orphan children"
                    },
                    {
                        "name": "GOSHALA sheltering dry cows",
                        "value": "GOSHALA sheltering dry cows"
                    },
                    {
                        "name": "Old Age Home  for destitute poor senior citizens",
                        "value": "Old Age Home  for destitute poor senior citizens"
                    },
                    {
                        "name": "Poor Rural Children Education",
                        "value": "Poor Rural Children Education"
                    },
                    {
                        "name": "Primary School Building Project",
                        "value": "Primary School Building Project"
                    }
                ]
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/SEVALAYA.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/SEVALAYA.gif",
        "biller_type": "PAYEE",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "SIDDHI",
        "biller_legal_name": "Shree Siddhivinayak Temple Trust",
        "biller_name": "Siddhivinayak Temple",
        "biller_location": "National",
        "biller_category": "Donation",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Name",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[0-9a-zA-Z\\s\\.]{3,40}$",
                "error_message": "Please enter a valid Name between 3 to 40 characters (eg. AARTI D SURVE)",
                "seq": "1"
            },
            {
                "parameter_name": "Address Line 1",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[A-Za-z0-9\\#\\-\\_\\(\\.\\)\\s\\,\\&\\/\\[\\]\\\\]{5,60}$",
                "error_message": "Please enter a valid Address between 5 to 60 characters (eg. New Link Road, Andheri West, Mumbai)",
                "seq": "2"
            },
            {
                "parameter_name": "Address Line 2",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[A-Za-z0-9\\#\\-\\_\\(\\.\\)\\s\\,\\&\\/\\[\\]\\\\]{5,60}$",
                "error_message": "Please enter a valid Address between 5 to 60 characters (eg. New Link Road, Andheri West, Mumbai)",
                "seq": "3"
            },
            {
                "parameter_name": "Telephone Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{7,12}$",
                "error_message": "Please enter a valid Telephone Number (e.g. 24183797) in digits without any special characters",
                "seq": "4"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/SIDDHI.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/SIDDHI.gif",
        "biller_type": "PAYEE",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "SUNDARAMMF",
        "biller_legal_name": "Sundaram Mutual Fund",
        "biller_name": "Sundaram Mutual Fund",
        "biller_location": "National",
        "biller_category": "Mutual Fund",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Unique Registration Number",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[A-Za-z0-9\\-]{10,15}$",
                "error_message": "Please enter a valid Unique Registration Number between 10 to 15 characters (eg. 0000170764)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/SUNDARAMMF.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/SUNDARAMMF.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "TMUCOR",
        "biller_legal_name": "Thane Municipal Corporation",
        "biller_name": "Municipal Corp Thane",
        "biller_location": "Mumbai",
        "biller_category": "Tax",
        "biller_reg_city": "Mumbai",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Property Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{8,12}$",
                "error_message": "Please enter a valid min 8 and max 12 digit Property Number (eg 209043800010)",
                "seq": "1"
            },
            {
                "parameter_name": "Sub-code",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{8,12}$",
                "error_message": "Please enter a valid min 8 and max 12 digit Sub-code (eg. 209043800010)",
                "seq": "2"
            },
            {
                "parameter_name": "Owner Name",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[\\s]$|^[a-zA-Z\\.\\s]{3,40}$",
                "error_message": "Please enter a valid min 3 and max 40 character Owner Name (eg. DR. SUYASH KULKARNI )",
                "seq": "3"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/TMUCOR.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/TMUCOR.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "UTIMF",
        "biller_legal_name": "UTI Mutual Fund",
        "biller_name": "UTI Mutual Fund",
        "biller_location": "National",
        "biller_category": "Mutual Fund",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Unique Registration No.",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^UT[0-9a-zA-Z]{6}[\\-]{1}[0-9a-zA-Z]{1,6}$|^ut[0-9a-zA-Z]{6}[\\-]{1}[0-9a-zA-Z]{1,6}$",
                "error_message": "Please enter a valid Unique Registration Number (eg. UT000000-146030)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/UTIMF.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/UTIMF.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "VIDYATRST",
        "biller_legal_name": "Vidayarambam Trust",
        "biller_name": "Vidayarambam Trust",
        "biller_location": "National",
        "biller_category": "Donation",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Name",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[0-9a-zA-Z\\s\\.]{3,40}$",
                "error_message": "Please enter a valid Name between 3 to 40 characters (eg. AARTI D SURVE)",
                "seq": "1"
            },
            {
                "parameter_name": "Address",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[A-Za-z0-9\\#\\-\\_\\(\\.\\)\\s\\,\\&\\/\\[\\]\\\\]{5,60}$",
                "error_message": "Please enter a valid Address between 5 to 60 characters (eg. New Link Road, Andheri West, Mumbai)",
                "seq": "2"
            },
            {
                "parameter_name": "Telephone Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{7,12}$",
                "error_message": "Please enter a valid numeric Telephone Number between 7 to 12 digits (eg. 9833320035 )",
                "seq": "3"
            },
            {
                "parameter_name": "Donor Options",
                "data_type": "List",
                "optional": "N",
                "regex": "Help poor child [10 month Rs. 750]|Basic education [1 Yr Rs. 900]|Modern education [1 Yr Rs. 8500]|General Fund Administration expense [Any amount]|Corpus Fund capital expense [Any amount]",
                "error_message": "Please select avalid Donor Options",
                "seq": "4",
                "list_of_values": [
                    {
                        "name": "Help poor child [10 month Rs. 750]",
                        "value": "Help poor child [10 month Rs. 750]"
                    },
                    {
                        "name": "basic education [ 1 Yr Rs. 900]",
                        "value": "basic education [ 1 Yr Rs. 900]"
                    },
                    {
                        "name": "Modern education [1 Yr Rs. 8500]",
                        "value": "Modern education [1 Yr Rs. 8500]"
                    },
                    {
                        "name": "General Fund Administration expense [Any amount]",
                        "value": "General Fund Administration expense [Any amount]"
                    },
                    {
                        "name": "Corpus Fund capital expense [Any amount]",
                        "value": "Corpus Fund capital expense [Any amount]"
                    }
                ]
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/VIDYATRST.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/VIDYATRST.gif",
        "biller_type": "PAYEE",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "VISHVODAYA",
        "biller_legal_name": "Vishvodayaa Trust",
        "biller_name": "Vishvodayaa Trust",
        "biller_location": "National",
        "biller_category": "Donation",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Name",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[0-9a-zA-Z\\s\\.]{3,40}$",
                "error_message": "Please enter a valid Name between 3 to 40 characters (eg. AARTI D SURVE)",
                "seq": "1"
            },
            {
                "parameter_name": "Address",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[A-Za-z0-9\\#\\-\\_\\(\\.\\)\\s\\,\\&\\/\\[\\]\\\\]{5,60}$",
                "error_message": "Please enter a valid Address between 5 to 60 characters (eg. New Link Road, Andheri West, Mumbai)",
                "seq": "2"
            },
            {
                "parameter_name": "Telephone Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{7,12}$",
                "error_message": "Please enter a valid numeric Telephone Number between 7 to 12 digits (eg. 9833320035 )",
                "seq": "3"
            },
            {
                "parameter_name": "Donation Type",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[A-Za-z0-9\\.\\s]{2,30}$",
                "error_message": "Please enter a donation type that is within 2 to 30 characters (eg. SENIOR)",
                "seq": "4"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/VISHVODAYA.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/VISHVODAYA.gif",
        "biller_type": "PAYEE",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "WISE",
        "biller_legal_name": "Womens Institute For Social Education",
        "biller_name": "WISE",
        "biller_location": "National",
        "biller_category": "Donation",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Name",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[0-9a-zA-Z\\s\\.]{3,40}$",
                "error_message": "Please enter a valid Name between 3 to 40 characters (eg. AARTI D SURVE)",
                "seq": "1"
            },
            {
                "parameter_name": "Address Line 1",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[A-Za-z0-9\\#\\-\\_\\(\\.\\)\\s\\,\\&\\/\\[\\]\\\\]{5,60}$",
                "error_message": "Please enter a valid Address between 5 to 60 characters (eg. New Link Road, Andheri West, Mumbai)",
                "seq": "2"
            },
            {
                "parameter_name": "Address Line 2",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[A-Za-z0-9\\#\\-\\_\\(\\.\\)\\s\\,\\&\\/\\[\\]\\\\]{5,60}$",
                "error_message": "Please enter a valid Address between 5 to 60 characters (eg. New Link Road, Andheri West, Mumbai)",
                "seq": "3"
            },
            {
                "parameter_name": "Contribution Scheme",
                "data_type": "List",
                "optional": "N",
                "regex": "Education|Health Care|Vocal Training",
                "error_message": "Please select a valid Contribution Scheme from the list",
                "seq": "4",
                "list_of_values": [
                    {
                        "name": "Education",
                        "value": "Education"
                    },
                    {
                        "name": "Health Care",
                        "value": "Health Care"
                    },
                    {
                        "name": "Vocal Training",
                        "value": "Vocal Training"
                    }
                ]
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/WISE.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/WISE.gif",
        "biller_type": "PAYEE",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "YOUTELECOM",
        "biller_legal_name": "YOU Telecom Limited",
        "biller_name": "YOU Telecom",
        "biller_location": "National",
        "biller_category": "Broadband Postpaid",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Account Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{1,20}$",
                "error_message": "Please enter a valid numeric Account Number within 20 digits (eg. 00000020322049453)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/YOUTELECOM.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/YOUTELECOM.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "REDGIRAFFE",
        "biller_legal_name": "Redgirraffe Limited",
        "biller_name": "Redgirraffe",
        "biller_location": "National",
        "biller_category": "Rental Payment",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "RedGirraffe Property ID",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^RG-[A-Za-z0-9\\-]{1,30}$",
                "error_message": "Please enter a valid min 4 and max 30 character RedGirraffe Property ID (eg. RG-0000003909)",
                "seq": "1"
            },
            {
                "parameter_name": "Mobile Number OR Email ID",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^([1-9]{1}[0-9]{9}|[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z]{2,}))$",
                "error_message": "Please enter a valid 10 digit Mobile Number (e.g. 9831052981) or Email ID (e.g. abc@abc.com)",
                "seq": "2"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/REDGIRAFFE.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/REDGIRAFFE.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "RELIGARMF",
        "biller_legal_name": "Invesco Mutual Fund",
        "biller_name": "Invesco Mutual Fund",
        "biller_location": "National",
        "biller_category": "Mutual Fund",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Unique Registration Number",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^IV[0-9a-zA-Z]{6}[\\-]{1}[0-9a-zA-Z]{6}$",
                "error_message": "Please enter a valid Unique Registration Number (eg. IV000000-A02662)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/RELIGARMF.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/RELIGARMF.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "LICMFSIP",
        "biller_legal_name": "LIC Mutual Fund",
        "biller_name": "LIC Mutual Fund",
        "biller_location": "National",
        "biller_category": "Mutual Fund",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Unique Registration Number",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^LM[0-9a-zA-Z]{6}[\\-]{1}[0-9a-zA-Z]{6}$",
                "error_message": "Please enter a valid Unique Registration Number (eg. LM019949-A00077)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/LICMFSIP.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/LICMFSIP.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "BSEMFSIP",
        "biller_legal_name": "BSE Limited",
        "biller_name": "BSE Limited",
        "biller_location": "National",
        "biller_category": "Mutual Fund",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Unique Registration Number",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^BSE[0-9]{12}$",
                "error_message": "Please enter a valid Unique Registration Number (eg. BSE000000000007)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/BSEMFSIP.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/BSEMFSIP.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "EDLWEISMFSIP",
        "biller_legal_name": "Edelweiss Asset Management Limited",
        "biller_name": "Edelweiss Asset Management Limited.",
        "biller_location": "National",
        "biller_category": "Mutual Fund",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Unique Registration Number",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^ED[0-9a-zA-Z]{6}[\\-]{1}[0-9a-zA-Z]{6}$",
                "error_message": "Please enter a valid Unique Registration Number (eg. ED000000-A00007)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/EDLWEISMFSIP.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/EDLWEISMFSIP.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "WBSEDCLEBPP",
        "biller_legal_name": "West Bengal State Electricity Distribution Company Limited",
        "biller_name": "West Bengal State Electricity (WBSEB)",
        "biller_location": "West Bengal",
        "biller_category": "Electricity",
        "biller_reg_city": "West Bengal",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Consumer ID",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{1,12}$",
                "error_message": "Please enter a valid numeric Consumer ID that is between 1 to 12 digits (eg. 100002201)",
                "seq": "1"
            },
            {
                "parameter_name": "Installation Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{1,10}$",
                "error_message": "Please enter a valid numeric Installation Number within 10 digits (eg. 1724158)",
                "seq": "2"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/WBSEDCLEBPP.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/WBSEDCLEBPP.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "AXAINS",
        "biller_legal_name": "Bharti AXA Life Insurance Company Limited",
        "biller_name": "Bharti AXA Life Insurance",
        "biller_location": "National",
        "biller_category": "Insurance",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Policy Number",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^500-[0-9]{7}$|^501-[0-9]{7}$",
                "error_message": "Please enter a valid Policy Number (eg. 500-0001502)",
                "seq": "1"
            },
            {
                "parameter_name": "Customer Name",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[a-zA-Z\\s\\.]{1,120}$",
                "error_message": "Please enter a valid Customer Name within 120 characters (eg. SHAIK FARHEEN)",
                "seq": "2"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/AXAINS.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/AXAINS.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "Y",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "BAFLEMIOB",
        "biller_legal_name": "Bajaj Auto Finance Limited",
        "biller_name": "Bajaj Auto Finance ",
        "biller_location": "National",
        "biller_category": "Loan",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "N"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "N"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "N"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "URN",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[0-9A-Za-z]{1,40}$",
                "error_message": "Please enter a valid URN within 40 characters (eg. A123456)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/BAFLEMIOB.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/BAFLEMIOB.gif",
        "biller_type": "BOTH",
        "partial_pay": "Y",
        "pay_after_duedate": "Y",
        "online_validation": "Y",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "BEDPCLOB",
        "biller_legal_name": "Bhagalpur Electricity Distribution Company Pvt. Limited",
        "biller_name": "Bhagalpur Electricity",
        "biller_location": "Bhagalpur",
        "biller_category": "Electricity",
        "biller_reg_city": "Bhagalpur",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Account Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{1,15}$",
                "error_message": "Please enter a valid numeric Account Number that is within 1 to 15 digits (eg. 101000000162)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/BEDPCLOB.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/BEDPCLOB.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "Y",
        "online_validation": "Y",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "DOCOMOOB",
        "biller_legal_name": "Docomo Postpaid",
        "biller_name": "Docomo Postpaid",
        "biller_location": "National",
        "biller_category": "Mobile Postpaid",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            }
        ],
        "biller_status": "INACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Mobile Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{10,12}$",
                "error_message": "Please enter a valid  Policy Number  eg. (6716950001)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://uat.billdesk.com/images/billerlogo/DOCOMOOB.gif",
        "biller_bill_copy": "https://uat.billdesk.com/images/billcopy/DOCOMOOB.gif",
        "biller_type": "BOTH",
        "partial_pay": "Y",
        "pay_after_duedate": "Y",
        "online_validation": "Y",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "TTSLOB",
        "biller_legal_name": "Tata Docomo Cdma ",
        "biller_name": "Tata Docomo CDMA ",
        "biller_location": "National",
        "biller_category": "Mobile Postpaid",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            }
        ],
        "biller_status": "INACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Mobile Number/Landline",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{10,12}$",
                "error_message": "Please enter valid Consumer ID having minimum length 1 and maximum length 12 digits numeric long(eg 012000000092)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://uat.billdesk.com/images/billerlogo/TTSLOB.gif",
        "biller_bill_copy": "https://uat.billdesk.com/images/billcopy/TTSLOB.gif",
        "biller_type": "BOTH",
        "partial_pay": "Y",
        "pay_after_duedate": "Y",
        "online_validation": "Y",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "METLIFE",
        "biller_legal_name": "PNB Metlife Insurance Company Limited",
        "biller_name": "PNB Metlife",
        "biller_location": "National",
        "biller_category": "Insurance",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Policy Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{8}$",
                "error_message": "Please enter a valid 8 digit Policy Number (eg. 00000033)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/METLIFE.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/METLIFE.gif",
        "biller_type": "BOTH",
        "partial_pay": "Y",
        "pay_after_duedate": "Y",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "SBILIF",
        "biller_legal_name": "SBI Life Insurance Company Limited",
        "biller_name": "SBI Life Insurance",
        "biller_location": "National",
        "biller_category": "Insurance",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Policy Number",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[0-9A-Za-z]{11}$",
                "error_message": "Please enter a valid 11 character Policy Number (eg. 00001046796)",
                "seq": "1"
            },
            {
                "parameter_name": "Installment Premium",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[1-9]{1}[0-9]{0,7}\\.[0-9]{2}$",
                "error_message": "Please enter a valid Installment Premium in Rs.Ps format (eg 750.00)",
                "seq": "2"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/SBILIF.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/SBILIF.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "TATAMFSIP",
        "biller_legal_name": "Tata Mutual Fund Isip",
        "biller_name": "Tata Mutual Fund",
        "biller_location": "National",
        "biller_category": "Mutual Fund",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Unique Registration Number",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^TA[0-9a-zA-Z]{6}[\\-]{1}[0-9a-zA-Z]{6}$",
                "error_message": "Please enter a valid Unique Registration Number (eg. TAARN018-109831)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/TATAMFSIP.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/TATAMFSIP.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "MAHINDRAFSIP",
        "biller_legal_name": "Mahindra Mutual Fund Isip",
        "biller_name": "Mahindra Mutual Fund",
        "biller_location": "National",
        "biller_category": "Mutual Fund",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Unique Registration Number",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^MH[0-9a-zA-Z]{6}[\\-]{1}[0-9a-zA-Z]{6}$",
                "error_message": "Please enter a valid Unique Registration Number (eg. MH0EBYDD-8MDW63)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/MAHINDRAFSIP.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/MAHINDRAFSIP.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "BIGTVDTH",
        "biller_legal_name": "BIG TV DTH Recharge",
        "biller_name": "BIG TV DTH",
        "biller_location": "National",
        "biller_category": "DTH",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Subscriber ID",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{1,20}$",
                "error_message": "Please enter a valid numeric Subscriber ID within 20 digits (eg. 209932)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/BIGTVDTH.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/BIGTVDTH.gif",
        "biller_type": "PAYEE",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "Y",
        "isbillerbbps": "N",
        "paymentamount_validation": "Y"
    },
    {
        "objectid": "biller",
        "billerid": "VIDEOCNDTH",
        "biller_legal_name": "Videocon Limited - DTH Recharge",
        "biller_name": "VIDEOCON DTH",
        "biller_location": "National",
        "biller_category": "DTH",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Subscriber ID",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{1,20}$",
                "error_message": "Enter a valid 10 digit Registered Mobile No or Subscriber ID. To know your Subscriber ID, SMS ID to 566777 from your registered mobile number",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/VIDEOCNDTH.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/VIDEOCNDTH.gif",
        "biller_type": "PAYEE",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "Y",
        "isbillerbbps": "N",
        "paymentamount_validation": "Y"
    },
    {
        "objectid": "biller",
        "billerid": "ACTBB",
        "biller_legal_name": "ACT Broadband",
        "biller_name": "ACT Broadband",
        "biller_location": "National",
        "biller_category": "Broadband Postpaid",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            }
        ],
        "biller_status": "INACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Account No OR User Name",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[A-Za-z0-9\\?\\*\\$\\@\\-#,_\\(\\.\\)\\s\\&;\\/\\[\\]\\\\]{3,50}$",
                "error_message": "Please enter a valid Account No Or User Name eg. (01141054307)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://uat.billdesk.com/images/billerlogo/ACTBB.gif",
        "biller_bill_copy": "https://uat.billdesk.com/images/billcopy/ACTBB.gif",
        "biller_type": "BOTH",
        "partial_pay": "Y",
        "pay_after_duedate": "Y",
        "online_validation": "Y",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "HSBCMFSIP",
        "biller_legal_name": "HSBC Mutual Fund",
        "biller_name": "Hsbc Mutual Fund",
        "biller_location": "National",
        "biller_category": "Mutual Fund",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Unique Registration Number",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^HS[0-9a-zA-Z]{6}[\\-]{1}[0-9a-zA-Z]{6}$",
                "error_message": "Please enter a valid Unique Registration Number (eg. HSDIRECT-123456)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/HSBCMFSIP.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/HSBCMFSIP.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "INDBULLMFSIP",
        "biller_legal_name": "Indiabulls Mutual Fund",
        "biller_name": "Indiabulls Mutual Fund",
        "biller_location": "National",
        "biller_category": "Mutual Fund",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Unique Registration Number",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^IN[0-9a-zA-Z]{6}[\\-]{1}[0-9a-zA-Z]{6}$",
                "error_message": "Please enter a valid Unique Registration Number (eg. IN117743-A00031)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/INDBULLMFSIP.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/INDBULLMFSIP.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "VMCOB",
        "biller_legal_name": "Vadodara Muncipal Corporation Property Tax",
        "biller_name": "Vadodara Muncipal Corporation Property Tax",
        "biller_location": "Vadodra",
        "biller_category": "Tax",
        "biller_reg_city": "Gujarat",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "N"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "N"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "N"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "CENSUS",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[0-9]{2}\\-[0-9]{2}\\-[0-9]{3}\\-[0-9]{3}\\-[0-9]{3}\\-[0-9]{3}$",
                "error_message": "Please enter a valid 21 characters CENSUS including hyphen(-) (eg 06-80-996-000-000-020)",
                "seq": "1"
            },
            {
                "parameter_name": "VMC_TRN_NO",
                "data_type": "Numeric",
                "optional": "Y",
                "regex": "^[0-9]{5,30}$",
                "error_message": "Please enter a valid min 5 and max 30 number VMC_TRN_NO (eg. 20171130000000000000)",
                "seq": "2"
            },
            {
                "parameter_name": "NAME",
                "data_type": "AlphaNumeric",
                "optional": "Y",
                "regex": "^[0-9A-Za-z\\.]{1,60}$",
                "error_message": "Please enter a valid min 1 and max 60 character Name (eg. H.D.F.C. LIMITED-OWNER HIMSELF-MADAN ZAMPA VADODARA )",
                "seq": "3"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/VMCOB.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/VMCOB.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "Y",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "VMSS",
        "biller_legal_name": "Vadodara Mahanagar Seva Sadan",
        "biller_name": "Vadodara Mahanagar Seva Sadan",
        "biller_location": "Vadodra",
        "biller_category": "Tax",
        "biller_reg_city": "Gujarat",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Census No",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{16}$",
                "error_message": "Please enter a valid 16 digit Census No (eg. 0418193011015020)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/VMSS.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/VMSS.gif",
        "biller_type": "PAYEE",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "PUDUELEC_DEPT",
        "biller_legal_name": "Puducherry Electricity Department",
        "biller_name": "Puducherry Electricity",
        "biller_location": "Puducherry",
        "biller_category": "Electricity",
        "biller_reg_city": "Puducherry",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Consumer Code",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[A-Z0-9\\-]{1,20}$",
                "error_message": "Please enter a valid Consumer Code that is between 1 to 20 characters (eg. 01-03-02-0143)",
                "seq": "1"
            },
            {
                "parameter_name": "Category",
                "data_type": "AlphaNumeric",
                "optional": "Y",
                "regex": "^[A-Za-z0-9\\#\\-\\_\\(\\.\\)\\s\\,\\&;\\/\\]\\[]{1,20}$",
                "error_message": "Please enter a valid Category within 20 characters (eg. L.T Industrial)",
                "seq": "2"
            },
            {
                "parameter_name": "Region",
                "data_type": "AlphaNumeric",
                "optional": "Y",
                "regex": "^[A-Za-z0-9#_,;\\-\\(\\.\\)\\s\\&\\/\\[\\\\]]{1,20}$",
                "error_message": "Please enter a valid Region within 20 characters (eg. PUDUCHERRY  )",
                "seq": "3"
            },
            {
                "parameter_name": "Name of the Customer",
                "data_type": "AlphaNumeric",
                "optional": "Y",
                "regex": "^[A-Za-z0-9#_,;\\-\\(\\.\\)\\s\\&\\/\\[\\\\]]{1,50}$",
                "error_message": "Please enter a valid Name of the Customer within 50 characters (e.g. N.MADHAVAN)",
                "seq": "4"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/PUDUELEC_DEPT.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/PUDUELEC_DEPT.gif",
        "biller_type": "PAYEE",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "ONEASSIST",
        "biller_legal_name": "Oneassist Limited",
        "biller_name": "ONEASSIST",
        "biller_location": "National",
        "biller_category": "Insurance",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Order ID",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{1,12}$",
                "error_message": "Please enter a valid numeric Order ID within 12 digits (eg. 272445)",
                "seq": "1"
            },
            {
                "parameter_name": "First name@Last name",
                "data_type": "AlphaNumeric",
                "optional": "Y",
                "regex": "^[0-9A-Za-z\\#\\-\\_\\(\\.\\)\\s\\,\\&;\\/\\]\\[\\;\\:\\@\\~\\$]{1,100}$",
                "error_message": "Please enter valid min 1 and max 100 character First name and Last name separated by special character (@) (eg. Roshan@Anand)",
                "seq": "2"
            },
            {
                "parameter_name": "Email ID",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4})$",
                "error_message": "Please enter a valid Email ID (eg. roshan.anand1@hdfcbank.com )",
                "seq": "3"
            },
            {
                "parameter_name": "Mobile number@ DOB@ Plan code",
                "data_type": "AlphaNumeric",
                "optional": "Y",
                "regex": "^[0-9A-Za-z#_,;\\-\\(\\.\\)\\s\\&\\\\\\/\\]\\[;:@~\\$]{1,100}$",
                "error_message": "Please enter valid Mobile number@ DOB@ Plan code Name having minimum length 1 and maximum length 100 characters long(e.g. 9702618898@27/02/1990@654)",
                "seq": "4"
            },
            {
                "parameter_name": "Plan name",
                "data_type": "AlphaNumeric",
                "optional": "Y",
                "regex": "^[A-Za-z0-9#_,;\\-\\(\\.\\)\\s\\&\\\\\\/\\]\\[;:@~\\$]{1,100}$",
                "error_message": "Please enter valid min 1 and max 100 character Plan Name (eg. Power Individual )",
                "seq": "5"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/ONEASSIST.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/ONEASSIST.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "INDIAMART",
        "biller_legal_name": "Indiamart Limited",
        "biller_name": "IndiaMart",
        "biller_location": "National",
        "biller_category": "Subscription",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Order Id",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{1,12}$",
                "error_message": "Please enter a valid min 1 and max 12 digit Order ID (eg. 1285050)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/INDIAMART.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/INDIAMART.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "Y",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "HUDAOB",
        "biller_legal_name": "Haryana Urban Development Authority - Water Bill",
        "biller_name": "HUDA - Water Bill",
        "biller_location": "Haryana",
        "biller_category": "Water",
        "biller_reg_city": "Haryana",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "N"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "N"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "N"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Consumer No",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{4,20}$",
                "error_message": "Please enter a valid min 4 and max 20 digit Consumer No (eg. 0600000562)",
                "seq": "1"
            },
            {
                "parameter_name": "Site Code",
                "data_type": "List",
                "optional": "N",
                "regex": "FARIDABAD_I-111011|PALWAL_HATHIN-111214|GURGAON_II-121316|GURGAON_III-121317|GURGOAN_I-131419|REWARI-131522|DHARUHERA-131523|BHIWANI-141626|JIND-141627|HANSI_HISAR_1-141628|FATHABAD-141730|SIRSA-141732|AMBALA-151835|KURUKSHETRA-151837|KARNAL-151939|KAITHAL-151940|YAMUNANAGAR JAGADHRI-151941|KARNAL II-151942|PANCHKULA_I-162042|PANCHKULA_II-162143|PANCHKULA_III-162144|BAHADURGARH-172345|ROHTAK_I-172446|PANIPAT-182548|SONIPAT-182649",
                "error_message": "Please select a valid Site Code from the list",
                "seq": "2",
                "list_of_values": [
                    {
                        "name": "FARIDABAD_I-111011",
                        "value": "FARIDABAD_I-111011"
                    },
                    {
                        "name": "PALWAL_HATHIN-111214",
                        "value": "PALWAL_HATHIN-111214"
                    },
                    {
                        "name": "GURGAON_II-121316",
                        "value": "GURGAON_II-121316"
                    },
                    {
                        "name": "GURGAON_III-121317",
                        "value": "GURGAON_III-121317"
                    },
                    {
                        "name": "GURGOAN_I-131419",
                        "value": "GURGOAN_I-131419"
                    },
                    {
                        "name": "REWARI-131522",
                        "value": "REWARI-131522"
                    },
                    {
                        "name": "DHARUHERA-131523",
                        "value": "DHARUHERA-131523"
                    },
                    {
                        "name": "BHIWANI-141626",
                        "value": "BHIWANI-141626"
                    },
                    {
                        "name": "JIND-141627",
                        "value": "JIND-141627"
                    },
                    {
                        "name": "HANSI_HISAR_1-141628",
                        "value": "HANSI_HISAR_1-141628"
                    },
                    {
                        "name": "FATHABAD-141730",
                        "value": "FATHABAD-141730"
                    },
                    {
                        "name": "SIRSA-141732",
                        "value": "SIRSA-141732"
                    },
                    {
                        "name": "AMBALA-151835",
                        "value": "AMBALA-151835"
                    },
                    {
                        "name": "KURUKSHETRA-151837",
                        "value": "KURUKSHETRA-151837"
                    },
                    {
                        "name": "KARNAL-151939",
                        "value": "KARNAL-151939"
                    },
                    {
                        "name": "KAITHAL-151940",
                        "value": "KAITHAL-151940"
                    },
                    {
                        "name": "YAMUNANAGAR JAGADHRI-151941",
                        "value": "YAMUNANAGAR JAGADHRI-151941"
                    },
                    {
                        "name": "KARNAL II-151942",
                        "value": "KARNAL II-151942"
                    },
                    {
                        "name": "PANCHKULA_I-162042",
                        "value": "PANCHKULA_I-162042"
                    },
                    {
                        "name": "PANCHKULA_II-162143",
                        "value": "PANCHKULA_II-162143"
                    },
                    {
                        "name": "PANCHKULA_III-162144",
                        "value": "PANCHKULA_III-162144"
                    },
                    {
                        "name": "BAHADURGARH-172345",
                        "value": "BAHADURGARH-172345"
                    },
                    {
                        "name": "ROHTAK_I-172446",
                        "value": "ROHTAK_I-172446"
                    },
                    {
                        "name": "PANIPAT-182548",
                        "value": "PANIPAT-182548"
                    },
                    {
                        "name": "SONIPAT-182649",
                        "value": "SONIPAT-182649"
                    }
                ]
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/HUDAOB.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/HUDAOB.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "Y",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "MPPKVCLJAB",
        "biller_legal_name": "Madhya Pradesh Poorv Kshetra Vidhyut Vitran Nigam Limited, Jabalpur",
        "biller_name": "MP Poorv Kshetra Vidhyut Vitran (Jabalpur)",
        "biller_location": "Jabalpur",
        "biller_category": "Electricity",
        "biller_reg_city": "Madhya Pradesh",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Consumer Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{10}$",
                "error_message": "Please enter a valid 10 digit Consumer Number (eg. 0007361000)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/MPPKVCLJAB.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/MPPKVCLJAB.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "LICM",
        "biller_legal_name": "Life Insurance Corporation Of India",
        "biller_name": "LIC India",
        "biller_location": "National",
        "biller_category": "Insurance",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "INACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Policy Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{9}$",
                "error_message": "Please enter a valid 9 digits Policy Number (eg. 585578452)",
                "seq": "1"
            },
            {
                "parameter_name": "Premium Amount",
                "data_type": "Decimal",
                "optional": "N",
                "regex": "^[1-9]{1}[0-9]{0,7}\\.[0-9]{2}$",
                "error_message": "Please enter a valid Premium Amount in Rs.Ps format (eg. 10.00)",
                "seq": "2"
            },
            {
                "parameter_name": "Email Address",
                "data_type": "AlphaNumeric",
                "optional": "Y",
                "regex": "^([a-zA-Z0-9._-]{1,30}@[a-zA-Z0-9_-]{1,20}[.]{1}[a-zA-Z.]{2,20})$",
                "error_message": "Please enter a valid Email ID (eg. sanjeevvd2002@yahoo.com )",
                "seq": "3"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/LICM.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/LICM.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "WBSEDCLQOB",
        "biller_legal_name": "West Bengal State Electicity Distribution Company Limited",
        "biller_name": "West Bengal State Electricity",
        "biller_location": "West Bengal",
        "biller_category": "Electricity",
        "biller_reg_city": "West Bengal",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            }
        ],
        "biller_status": "INACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Installation Number",
                "data_type": "Numeric",
                "optional": "Y",
                "regex": "^[0-9]{1,10}$",
                "error_message": "Please enter a valid Installation Number (e.g. 1234567890)",
                "seq": "1"
            },
            {
                "parameter_name": "Consumer ID",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{1,12}$",
                "error_message": "Please enter a valid Consumer ID (e.g. 123456789012)",
                "seq": "2"
            },
            {
                "parameter_name": "Mobile Number",
                "data_type": "Numeric",
                "optional": "Y",
                "regex": "^[0-9]{10}$",
                "error_message": "Please enter a valid Mobile Number (e.g. 9831198311)",
                "seq": "3"
            },
            {
                "parameter_name": "Payment ID",
                "data_type": "AlphaNumeric",
                "optional": "Y",
                "regex": "^[0-9A-Za-z\\$\\s]{3,100}$",
                "error_message": "Please enter a valid Payment ID (e.g. AAA123456)",
                "seq": "4"
            },
            {
                "parameter_name": "Customer Name",
                "data_type": "AlphaNumeric",
                "optional": "Y",
                "regex": "^[A-Za-z0-9#_,;\\-\\(\\.\\)\\s\\&\\\\\\/\\]\\[;:@~\\$]{3,160}$",
                "error_message": "Please enter a valid Customer Name (eg - Anuj Tripathi )",
                "seq": "5"
            }
        ],
        "biller_logo": "https://uat.billdesk.com/images/billerlogo/WBSEDCLQOB.gif",
        "biller_bill_copy": "https://uat.billdesk.com/images/billcopy/WBSEDCLQOB.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "Y",
        "online_validation": "Y",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "ADAN00000GUJ01",
        "biller_legal_name": "Adani Gas Limited - Gujarat",
        "biller_name": "Adani Gas - Gujarat",
        "biller_location": "Gujarat",
        "biller_category": "Gas",
        "biller_reg_address": "Adani House, Nr.Mithakhali Circle, Navrangpura",
        "biller_reg_city": "Ahmedabad",
        "biller_reg_pin": "380009",
        "biller_reg_state": "Gujarat",
        "biller_reg_country": "India",
        "biller_mode": "OFFLINEA",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Customer ID",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{10}$",
                "error_message": "Please enter a valid 10 digit Customer ID (eg. 1000111336)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/ADAN00000GUJ01.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/ADAN00000GUJ01.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "Y",
        "online_validation": "Y",
        "isbillerbbps": "Y",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "MCGMMU",
        "biller_legal_name": "Municipal Corporation Of Greater Mumbai",
        "biller_name": "MCGM Mumbai",
        "biller_location": "Mumbai",
        "biller_category": "Tax",
        "biller_reg_city": "Mumbai",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Short Name",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[0-9A-Za-z]{1,12}$",
                "error_message": "Please enter a valid Short Name (eg. MCGM)",
                "seq": "1"
            },
            {
                "parameter_name": "Ward Number",
                "data_type": "List",
                "optional": "N",
                "regex": "A|B|C|D|E|FS|FN|GS|GN|HE|HW|KE|KW|L|ME|MW|N|PS|PN|RS|RN|S|T|RC",
                "error_message": "Please select a valid Ward Number eg. (KE) ",
                "seq": "2",
                "list_of_values": [
                    {
                        "name": "A",
                        "value": "A"
                    },
                    {
                        "name": "B",
                        "value": "B"
                    },
                    {
                        "name": "C",
                        "value": "C"
                    },
                    {
                        "name": "D",
                        "value": "D"
                    },
                    {
                        "name": "E",
                        "value": "E"
                    },
                    {
                        "name": "FS",
                        "value": "FS"
                    },
                    {
                        "name": "FN",
                        "value": "FN"
                    },
                    {
                        "name": "GS",
                        "value": "GS"
                    },
                    {
                        "name": "GN",
                        "value": "GN"
                    },
                    {
                        "name": "HE",
                        "value": "HE"
                    },
                    {
                        "name": "HW",
                        "value": "HW"
                    },
                    {
                        "name": "KE",
                        "value": "KE"
                    },
                    {
                        "name": "KW",
                        "value": "KW"
                    },
                    {
                        "name": "L",
                        "value": "L"
                    },
                    {
                        "name": "ME",
                        "value": "ME"
                    },
                    {
                        "name": "MW",
                        "value": "MW"
                    },
                    {
                        "name": "N",
                        "value": "N"
                    },
                    {
                        "name": "PS",
                        "value": "PS"
                    },
                    {
                        "name": "PN",
                        "value": "PN"
                    },
                    {
                        "name": "RS",
                        "value": "RS"
                    },
                    {
                        "name": "RN",
                        "value": "RN"
                    },
                    {
                        "name": "S",
                        "value": "S"
                    },
                    {
                        "name": "T",
                        "value": "T"
                    },
                    {
                        "name": "RC",
                        "value": "RC"
                    }
                ]
            },
            {
                "parameter_name": "Citizen Account Number",
                "data_type": "Numeric",
                "optional": "Y",
                "regex": "^[0-9]{9}$",
                "error_message": "Please enter a valid 9 digit Citizen Account Number (eg. 040530002)",
                "seq": "3"
            }
        ],
        "biller_logo": "https://uat.billdesk.com/images/billerlogo/MCGMMU.gif",
        "biller_bill_copy": "https://uat.billdesk.com/images/billcopy/MCGMMU.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "MPPKVCLIN",
        "biller_legal_name": "Madhya Pradesh Pashcim Kshetra, Indore (Non - RAPDR)",
        "biller_name": "MP Paschim Kshetra Electricity - Indore (Non-RAPDDR)",
        "biller_location": "Indore",
        "biller_category": "Electricity",
        "biller_reg_city": "Madhya Pradesh",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "IVRS Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{10,20}$",
                "error_message": "Please enter a valid numeric IVRS Number between 10 to 20 digits (eg. 0000171098)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/MPPKVCLIN.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/MPPKVCLIN.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "ADAN00000HAR02",
        "biller_legal_name": "Adani Gas Limited - Haryana",
        "biller_name": "Adani Gas - Haryana",
        "biller_location": "Haryana",
        "biller_category": "Gas",
        "biller_reg_address": "Adani House, Nr.Mithakhali Circle, Navrangpura",
        "biller_reg_city": "Ahmedabad",
        "biller_reg_pin": "380009",
        "biller_reg_state": "Gujarat",
        "biller_reg_country": "India",
        "biller_mode": "OFFLINEA",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Customer ID",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{10}$",
                "error_message": "Please enter a valid 10 digit Customer ID (eg. 1000111336)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/ADAN00000HAR02.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/ADAN00000HAR02.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "Y",
        "online_validation": "Y",
        "isbillerbbps": "Y",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "AIRCELMOBNAT01",
        "biller_legal_name": "Aircel Limited",
        "biller_name": "Aircel Postpaid",
        "biller_location": "National",
        "biller_category": "Mobile Postpaid",
        "biller_reg_address": "Opus Centre, 47, Central Road Opposite Tunga Paradise, MIDC Andheri East",
        "biller_reg_city": "Mumbai",
        "biller_reg_pin": "400093",
        "biller_reg_state": "Maharashtra",
        "biller_reg_country": "India",
        "biller_mode": "ONLINE",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            }
        ],
        "biller_status": "INACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Mobile Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{1,10}$",
                "error_message": "Please enter a valid 10 digit Mobile Number (eg. 1400020651)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://uat.billdesk.com/images/billerlogo/AIRCELMOBNAT01.gif",
        "biller_bill_copy": "https://uat.billdesk.com/images/billcopy/AIRCELMOBNAT01.gif",
        "biller_type": "BOTH",
        "partial_pay": "Y",
        "pay_after_duedate": "Y",
        "online_validation": "Y",
        "isbillerbbps": "Y",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "BEST00000MUM01",
        "biller_legal_name": "Brihan Mumbai Electric Supply and Transport Undertaking",
        "biller_name": "BEST Mumbai",
        "biller_location": "Mumbai",
        "biller_category": "Electricity",
        "biller_reg_address": "BEST Bhavan, Best Marg, Post Box No. 192",
        "biller_reg_city": "Mumbai",
        "biller_reg_pin": "400001",
        "biller_reg_state": "Maharashtra",
        "biller_reg_country": "India",
        "biller_mode": "ONLINE",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Consumer Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{10}|[0-9]{9},$",
                "error_message": "Please enter a valid 10 digit Consumer Number (eg. 7635540315) - For Consumer Number with 9 digits, please append comma (,) at the end of the number (eg. 556591071 to be entered as 556591071,)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/BEST00000MUM01.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/BEST00000MUM01.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "Y",
        "online_validation": "Y",
        "isbillerbbps": "Y",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "BSESRAJPLDEL01",
        "biller_legal_name": "BSES Rajdhani Power Limted",
        "biller_name": "BSES Rajdhani",
        "biller_location": "Delhi",
        "biller_category": "Electricity",
        "biller_reg_address": "1st Floor, C-Block, BSES Bhavan, Nehru Place",
        "biller_reg_city": "New Delhi",
        "biller_reg_pin": "110019",
        "biller_reg_state": "Delhi",
        "biller_reg_country": "India",
        "biller_mode": "OFFLINEA",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "CA Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{9}$",
                "error_message": "Please enter a valid 9 digit CA Number (eg. 151149909)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/BSESRAJPLDEL01.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/BSESRAJPLDEL01.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "Y",
        "online_validation": "Y",
        "isbillerbbps": "Y",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "BSESYAMPLDEL01",
        "biller_legal_name": "BSES Yamuna Power Limited",
        "biller_name": "BSES Yamuna",
        "biller_location": "Delhi",
        "biller_category": "Electricity",
        "biller_reg_address": "Shakti Kiran Buidling, 3rd Floor, A Block, Karkardooma",
        "biller_reg_city": "New Delhi",
        "biller_reg_pin": "110092",
        "biller_reg_state": "Delhi",
        "biller_reg_country": "India",
        "biller_mode": "OFFLINEA",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "CA Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{9}$",
                "error_message": "Please enter a valid 9 digit CA Number (eg. 100673137)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/BSESYAMPLDEL01.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/BSESYAMPLDEL01.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "Y",
        "online_validation": "Y",
        "isbillerbbps": "Y",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "BSNLMOB00NAT01",
        "biller_legal_name": "Bharat Sanchar Nigam Limited - Mobile Postpaid",
        "biller_name": "BSNL Mobile Postpaid",
        "biller_location": "National",
        "biller_category": "Mobile Postpaid",
        "biller_reg_address": "3rd Floor, Bharat Sanchar Bhawan, Harish Chander Mathur Lane, Janpath",
        "biller_reg_city": "New Delhi",
        "biller_reg_pin": "110001",
        "biller_reg_state": "Delhi",
        "biller_reg_country": "India",
        "biller_mode": "ONLINE",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "1000000.00"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "1000000.00"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "1000000.00"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "1000000.00"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "1000000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "1000000.00"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "1000000.00"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "1000000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "1000000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "1000000.00"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "1000000.00"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Mobile Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{10}$",
                "error_message": "Please enter a valid 10 digit Mobile Number (eg. 9419189938)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/BSNLMOB00NAT01.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/BSNLMOB00NAT01.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "Y",
        "isbillerbbps": "Y",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "BSNLLLINDNAT01",
        "biller_legal_name": "Bharat Sanchar Nigam Limited - Landline Individual",
        "biller_name": "BSNL Landline - Individual",
        "biller_location": "National",
        "biller_category": "Landline Postpaid",
        "biller_reg_address": "3rd Floor, Bharat Sanchar Bhawan, Harish Chander Mathur Lane, Janpath",
        "biller_reg_city": "New Delhi",
        "biller_reg_pin": "110001",
        "biller_reg_state": "Delhi",
        "biller_reg_country": "India",
        "biller_mode": "ONLINE",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "1000000.00"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "1000000.00"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "1000000.00"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "1000000.00"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "1000000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "1000000.00"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "1000000.00"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "1000000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "1000000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "1000000.00"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "1000000.00"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Account Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{10}$",
                "error_message": "Please enter a valid 10 digit Account Number (eg. 1022455675)",
                "seq": "1"
            },
            {
                "parameter_name": "Number with STD Code (without 0)",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{10}$",
                "error_message": "Please enter a valid Telephone Number with STD Code (without 0) (eg. 1722587761)",
                "seq": "2"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/BSNLLLINDNAT01.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/BSNLLLINDNAT01.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "Y",
        "isbillerbbps": "Y",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "CESC00000KOL01",
        "biller_legal_name": "Calcutta Electric Supply Corporation",
        "biller_name": "Calcutta Electric Supply",
        "biller_location": "Kolkata",
        "biller_category": "Electricity",
        "biller_reg_address": "CESC House, Chowringhee Square",
        "biller_reg_city": "Kolkata",
        "biller_reg_pin": "700001",
        "biller_reg_state": "West Bengal",
        "biller_reg_country": "India",
        "biller_mode": "ONLINE",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Customer ID (Not Consumer No)",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{11}$",
                "error_message": "Please enter a valid 11 digit Customer ID (Not Consumer No) (eg. 14000375661)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/CESC00000KOL01.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/CESC00000KOL01.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "Y",
        "online_validation": "Y",
        "isbillerbbps": "Y",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "DDED00000DAD01",
        "biller_legal_name": "Daman and Diu Electricity Department",
        "biller_name": "Daman and Diu Electricity",
        "biller_location": "Daman and Diu",
        "biller_category": "Electricity",
        "biller_reg_address": "Administration of Daman & Diu, (U.T) Office of the Executive Engineer Electricity Department, VidhutBhavan, Kachigam Road-Somnath, Nani Daman",
        "biller_reg_city": "Daman",
        "biller_reg_pin": "396210",
        "biller_reg_state": "Daman and Diu",
        "biller_reg_country": "India",
        "biller_mode": "ONLINE",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Account Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{1,6}$",
                "error_message": "Please enter a valid min 1 and max 6 digit Account Number (eg. 132944)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/DDED00000DAD01.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/DDED00000DAD01.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "Y",
        "online_validation": "Y",
        "isbillerbbps": "Y",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "MGVCL0000GUJ01",
        "biller_legal_name": "Madhya Gujarat Vij Company Limited",
        "biller_name": "Madhya Gujarat Vij Company (MGVCL)",
        "biller_location": "Gujarat",
        "biller_category": "Electricity",
        "biller_reg_address": "Sardar Patel Vidhyut Bhavan, Race Course",
        "biller_reg_city": "Vadodra",
        "biller_reg_pin": "390007",
        "biller_reg_state": "Gujarat",
        "biller_reg_country": "India",
        "biller_mode": "ONLINE",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Consumer Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{5}$|^[0-9]{11}$",
                "error_message": "Please enter a valid 5 or 11 digit Consumer Number (eg. 15430084620)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/MGVCL0000GUJ01.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/MGVCL0000GUJ01.gif",
        "biller_type": "PAYEE",
        "partial_pay": "N",
        "pay_after_duedate": "Y",
        "online_validation": "Y",
        "isbillerbbps": "Y",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "PGVCL0000GUJ01",
        "biller_legal_name": "Paschim Gujarat Vij Company Limited",
        "biller_name": "Paschim Gujarat Vij Company (PGVCL)",
        "biller_location": "Gujarat",
        "biller_category": "Electricity",
        "biller_reg_address": "Corporate Office, Laxmi Nagar, Nana Mava Main Road",
        "biller_reg_city": "Rajkot",
        "biller_reg_pin": "360004",
        "biller_reg_state": "Gujarat",
        "biller_reg_country": "India",
        "biller_mode": "ONLINE",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Consumer Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{5}$|^[0-9]{11}$",
                "error_message": "Please enter a valid 5 or 11 digit Consumer Number (eg. 33708075382)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/PGVCL0000GUJ01.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/PGVCL0000GUJ01.gif",
        "biller_type": "PAYEE",
        "partial_pay": "N",
        "pay_after_duedate": "Y",
        "online_validation": "Y",
        "isbillerbbps": "Y",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "DGVCL0000GUJ01",
        "biller_legal_name": "Dakshin Gujarat Vij Company Limited",
        "biller_name": "Dakshin Gujarat Vij Company (DGVCL)",
        "biller_location": "Gujarat",
        "biller_category": "Electricity",
        "biller_reg_address": "Corporate Office, Urja Sadan, Nana Varachha Road, Kapodra Char Rasta",
        "biller_reg_city": "Surat",
        "biller_reg_pin": "395006",
        "biller_reg_state": "Gujarat",
        "biller_reg_country": "India",
        "biller_mode": "ONLINE",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Consumer Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{5}$|^[0-9]{11}$",
                "error_message": "Please enter a valid 5 or 11 digit Consumer Number (eg. 10859020916)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/DGVCL0000GUJ01.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/DGVCL0000GUJ01.gif",
        "biller_type": "PAYEE",
        "partial_pay": "N",
        "pay_after_duedate": "Y",
        "online_validation": "Y",
        "isbillerbbps": "Y",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "UGVCL0000GUJ01",
        "biller_legal_name": "Uttar Gujarat Vij Company Limited",
        "biller_name": "Uttar Gujarat Vij Company (UGVCL)",
        "biller_location": "Gujarat",
        "biller_category": "Electricity",
        "biller_reg_address": "Corporate Office, Visnagar Road",
        "biller_reg_city": "Mehasana",
        "biller_reg_pin": "384001",
        "biller_reg_state": "Gujarat",
        "biller_reg_country": "India",
        "biller_mode": "ONLINE",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Consumer Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{5}$|^[0-9]{11}$",
                "error_message": "Please enter a valid 5 or 11 digit Consumer Number (eg. 20943111706)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/UGVCL0000GUJ01.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/UGVCL0000GUJ01.gif",
        "biller_type": "PAYEE",
        "partial_pay": "N",
        "pay_after_duedate": "Y",
        "online_validation": "Y",
        "isbillerbbps": "Y",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "GUJGAS000GUJ01",
        "biller_legal_name": "Gujarat Gas Limited",
        "biller_name": "Gujarat Gas Limited",
        "biller_location": "Gujarat",
        "biller_category": "Gas",
        "biller_reg_address": "Block No. 15, 3rd Floor, Udyog Bhavan, Sector-11",
        "biller_reg_city": "Gandhinagar",
        "biller_reg_pin": "382010",
        "biller_reg_state": "Gujarat",
        "biller_reg_country": "India",
        "biller_mode": "OFFLINEA",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Customer ID",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{1,15}$",
                "error_message": "Please enter a valid CustomerID with a maximum of 15 digits (eg. 500001141342)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/GUJGAS000GUJ01.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/GUJGAS000GUJ01.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "Y",
        "online_validation": "Y",
        "isbillerbbps": "Y",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "IDEA00000NAT01",
        "biller_legal_name": "Idea Cellular Limited - Postpaid",
        "biller_name": "Idea Postpaid",
        "biller_location": "National",
        "biller_category": "Mobile Postpaid",
        "biller_reg_address": "Idea Cellular Ltd, Corporate Office, 5th Floor, Windsor, Off C.S.T. Road, New Vidya Nagri, Kalina, Santacruz",
        "biller_reg_city": "Mumbai",
        "biller_reg_pin": "400098",
        "biller_reg_state": "Maharashtra",
        "biller_reg_country": "India",
        "biller_mode": "ONLINE",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "10.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "10.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "10.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "10.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "10.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "10.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "10.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "10.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "10.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "10.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "POS",
                "min_limit": "10.00",
                "max_limit": "200000.00"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Customer Mobile Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[1-9]{1}[0-9]{9}$",
                "error_message": "Please enter a valid 10 digit Customer Mobile Number (eg. 7350035143)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/IDEA00000NAT01.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/IDEA00000NAT01.gif",
        "biller_type": "BOTH",
        "partial_pay": "Y",
        "pay_after_duedate": "Y",
        "online_validation": "Y",
        "isbillerbbps": "Y",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "DNHPDCL0DNH001",
        "biller_legal_name": "DNH Power Distribution Company Limited",
        "biller_name": "DNH Power Distribution",
        "biller_location": "Dadra and Nagar Haveli",
        "biller_category": "Electricity",
        "biller_reg_address": "Vidyut Bhavan, Near Secretariat, 66 KV Road, Amli, Silvassa",
        "biller_reg_city": "Dadra and Nagar Haveli",
        "biller_reg_pin": "396230",
        "biller_reg_state": "Dadra and Nagar Haveli",
        "biller_reg_country": "India",
        "biller_mode": "ONLINE",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Service Connection Number",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[A-Za-z0-9\\/]{1,20}$",
                "error_message": "Please enter a valid Service Connection Number with a maximum of 20 characters (eg. S/8030)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/DNHPDCL0DNH001.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/DNHPDCL0DNH001.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "Y",
        "online_validation": "Y",
        "isbillerbbps": "Y",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "EPDCLOB00ANP01",
        "biller_legal_name": "Eastern Power Distribution Company Limited",
        "biller_name": "Eastern Power Distribution (APEPDCL)",
        "biller_location": "Andhra Pradesh",
        "biller_category": "Electricity",
        "biller_reg_address": "P & T, Colony, Seethammadhara",
        "biller_reg_city": "Vishakhapatnam",
        "biller_reg_pin": "530013",
        "biller_reg_state": "Andhra Pradesh",
        "biller_reg_country": "India",
        "biller_mode": "ONLINE",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Service Number",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[0-9A-Za-z\\/]{8,20}$",
                "error_message": "Please enter a valid Service Number between 8 to 20 characters (eg. 1111281752319695)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/EPDCLOB00ANP01.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/EPDCLOB00ANP01.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "Y",
        "online_validation": "Y",
        "isbillerbbps": "Y",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "INDRAPGASDEL02",
        "biller_legal_name": "Indraprastha Gas",
        "biller_name": "Indraprastha Gas",
        "biller_location": "Delhi",
        "biller_category": "Gas",
        "biller_reg_address": "IGL Bhawan, plot No. 4, Community Center, R.K Puram, Sector 9",
        "biller_reg_city": "New Delhi",
        "biller_reg_pin": "110022",
        "biller_reg_state": "Delhi",
        "biller_reg_country": "India",
        "biller_mode": "ONLINE",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "BP Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{10}$",
                "error_message": "Please enter a valid BP Number that is a maximum of 10 digits (eg. 4000086461)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/INDRAPGASDEL02.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/INDRAPGASDEL02.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "Y",
        "online_validation": "Y",
        "isbillerbbps": "Y",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "JUSC00000JAM01",
        "biller_legal_name": "Jamshedpur Utilities and Services Company",
        "biller_name": "Jamshedpur Utilities (JUSCO)",
        "biller_location": "Jamshedpur",
        "biller_category": "Electricity",
        "biller_reg_address": "Sakchi Boulevard Road,Northern Town, Bistupur",
        "biller_reg_city": "Jamshedpur",
        "biller_reg_pin": "831001",
        "biller_reg_state": "Jharkhand",
        "biller_reg_country": "India",
        "biller_mode": "OFFLINEA",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Business Partner Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{6,10}$",
                "error_message": "Please enter a valid min 6 and max 10 digit Business Partner Number (e.g. 0010060071)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/JUSC00000JAM01.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/JUSC00000JAM01.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "Y",
        "isbillerbbps": "Y",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "MAHA00000MUM01",
        "biller_legal_name": "Mahanagar Gas Limited",
        "biller_name": "Mahanagar Gas",
        "biller_location": "Mumbai",
        "biller_category": "Gas",
        "biller_reg_address": "MGL House, Block no. G-33, Bandra Kurla Complex, Bandra (East)",
        "biller_reg_city": "Mumbai",
        "biller_reg_pin": "400051",
        "biller_reg_state": "Maharashtra",
        "biller_reg_country": "India",
        "biller_mode": "ONLINE",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "CA Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^21[0-9]{10}$",
                "error_message": "Please enter a valid 12 digit CA Number starting with 21 (eg. 210000000004)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/MAHA00000MUM01.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/MAHA00000MUM01.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "Y",
        "online_validation": "Y",
        "isbillerbbps": "Y",
        "paymentamount_validation": "N",
        "customer_conv_fee": [
            {
                "payment_method": "CreditCard",
                "payment_channel": "Mobile",
                "bou_conv_fee_type": "fixed",
                "bou_conv_fee": "5.00",
                "amount_slab_start": "0.00",
                "amount_slab_end": "99999999.99"
            },
            {
                "payment_method": "DebitCard",
                "payment_channel": "Internet",
                "bou_conv_fee_type": "fixed",
                "bou_conv_fee": "5.00",
                "amount_slab_start": "0.00",
                "amount_slab_end": "99999999.99"
            },
            {
                "payment_method": "BankAccount",
                "payment_channel": "Mobile",
                "bou_conv_fee_type": "fixed",
                "bou_conv_fee": "5.00",
                "amount_slab_start": "0.00",
                "amount_slab_end": "99999999.99"
            },
            {
                "payment_method": "CreditCard",
                "payment_channel": "InternetBanking",
                "bou_conv_fee_type": "fixed",
                "bou_conv_fee": "5.00",
                "amount_slab_start": "0.00",
                "amount_slab_end": "99999999.99"
            },
            {
                "payment_method": "CreditCard",
                "payment_channel": "Internet",
                "bou_conv_fee_type": "fixed",
                "bou_conv_fee": "5.00",
                "amount_slab_start": "0.00",
                "amount_slab_end": "99999999.99"
            },
            {
                "payment_method": "BankAccount",
                "payment_channel": "Internet",
                "bou_conv_fee_type": "fixed",
                "bou_conv_fee": "5.00",
                "amount_slab_start": "0.00",
                "amount_slab_end": "99999999.99"
            },
            {
                "payment_method": "CreditCard",
                "payment_channel": "MobileBanking",
                "bou_conv_fee_type": "fixed",
                "bou_conv_fee": "5.00",
                "amount_slab_start": "0.00",
                "amount_slab_end": "99999999.99"
            },
            {
                "payment_method": "BankAccount",
                "payment_channel": "InternetBanking",
                "bou_conv_fee_type": "fixed",
                "bou_conv_fee": "5.00",
                "amount_slab_start": "0.00",
                "amount_slab_end": "99999999.99"
            },
            {
                "payment_method": "BankAccount",
                "payment_channel": "MobileBanking",
                "bou_conv_fee_type": "fixed",
                "bou_conv_fee": "5.00",
                "amount_slab_start": "0.00",
                "amount_slab_end": "99999999.99"
            }
        ]
    },
    {
        "objectid": "biller",
        "billerid": "KEDLOB000KTA01",
        "biller_legal_name": "Kota Electricity Distribution Limited",
        "biller_name": "Kota Electricity (KEDL)",
        "biller_location": "Kota",
        "biller_category": "Electricity",
        "biller_reg_address": "CESC House, Chowringhee Square",
        "biller_reg_city": "Kolkata",
        "biller_reg_pin": "700001",
        "biller_reg_state": "West Bengal",
        "biller_reg_country": "India",
        "biller_mode": "OFFLINEA",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "K Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{12}$",
                "error_message": "Please enter a valid 12 digit K Number (eg. 214568264021)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/KEDLOB000KTA01.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/KEDLOB000KTA01.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "Y",
        "online_validation": "Y",
        "isbillerbbps": "Y",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "MPPK00000MAP01",
        "biller_legal_name": "MP Paschim Kshetra Vidyut Vitaran Co Limited (Indore) - NONRAPDR",
        "biller_name": "MPPKVVCL (Indore) - NONRAPDR",
        "biller_location": "Madhya Pradesh",
        "biller_category": "Electricity",
        "biller_reg_address": "GPH Compound,Polo Ground",
        "biller_reg_city": "Indore",
        "biller_reg_pin": "452003",
        "biller_reg_state": "Madhya Pradesh",
        "biller_reg_country": "India",
        "biller_mode": "ONLINE",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Customer Number",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[0-9A-Za-z]{2,30}$",
                "error_message": "Please Enter Valid Customer Number (eg. 7562544153)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/MPPK00000MAP01.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/MPPK00000MAP01.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "Y",
        "isbillerbbps": "Y",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "MAHA00000MAH01",
        "biller_legal_name": "Maharashtra State Electricity Distribution Co Limited",
        "biller_name": "MSEDCL",
        "biller_location": "Maharashtra",
        "biller_category": "Electricity",
        "biller_reg_address": "Prakashgad, Bandra East",
        "biller_reg_city": "Mumbai",
        "biller_reg_pin": "400051",
        "biller_reg_state": "Maharashtra",
        "biller_reg_country": "India",
        "biller_mode": "OFFLINEA",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Consumer No",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{12}$",
                "error_message": "Please enter a valid 12 digit Consumer No (eg. 000437378053)",
                "seq": "1"
            },
            {
                "parameter_name": "BU",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{4}$",
                "error_message": "Please enter valid 4 digit BU number (eg. 3667) as it appears on your bill",
                "seq": "2"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/MAHA00000MAH01.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/MAHA00000MAH01.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "Y",
        "online_validation": "Y",
        "isbillerbbps": "Y",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "MTNL00000MUM01",
        "biller_legal_name": "Mahanagar Telephone Nigam Limited - Mumbai",
        "biller_name": "MTNL Mumbai",
        "biller_location": "Mumbai",
        "biller_category": "Landline Postpaid",
        "biller_reg_address": "MTNL Corporate Office, Mahanagar Door Sanchar Sadan",
        "biller_reg_city": "Mumbai",
        "biller_reg_pin": "400028",
        "biller_reg_state": "Maharashtra",
        "biller_reg_country": "India",
        "biller_mode": "ONLINE",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "1000000.00"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "1000000.00"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "1000000.00"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "1000000.00"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "1000000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "1000000.00"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "1000000.00"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "1000000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "1000000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "1000000.00"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "1000000.00"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Telephone Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{8}$",
                "error_message": "Please enter a valid 8 digit Telephone Number (eg. 25672706)",
                "seq": "1"
            },
            {
                "parameter_name": "Account Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{10}$",
                "error_message": "Please enter a valid 10 digit Account Number (eg. 2100304179)",
                "seq": "2"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/MTNL00000MUM01.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/MTNL00000MUM01.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "Y",
        "online_validation": "Y",
        "isbillerbbps": "Y",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "MTNL00000DEL01",
        "biller_legal_name": "Mahanagar Telephone Nigam Limited - Delhi",
        "biller_name": "MTNL Delhi",
        "biller_location": "Delhi NCR",
        "biller_category": "Landline Postpaid",
        "biller_reg_address": "5th Floor, Mahanagar Doorsanchar Sadan, 9, CGO Complex, Lodhi Road",
        "biller_reg_city": "Delhi",
        "biller_reg_pin": "110003",
        "biller_reg_state": "Delhi",
        "biller_reg_country": "India",
        "biller_mode": "ONLINE",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "1000000.00"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "1000000.00"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "1000000.00"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "1000000.00"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "1000000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "1000000.00"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "1000000.00"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "1000000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "1000000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "1000000.00"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "1000000.00"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Telephone Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{8}$",
                "error_message": "Please enter a valid 8 digit Telephone Number starting with 2 (eg. 25994921)",
                "seq": "1"
            },
            {
                "parameter_name": "Account Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{10}$",
                "error_message": "Please enter a valid 10 digit Account Number (eg. 2020304179)",
                "seq": "2"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/MTNL00000DEL01.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/MTNL00000DEL01.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "Y",
        "isbillerbbps": "Y",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "NPCL00000NOI01",
        "biller_legal_name": "Noida Power Co Limited",
        "biller_name": "Noida Power",
        "biller_location": "Greater Noida",
        "biller_category": "Electricity",
        "biller_reg_address": "Commercial Complex, Block-H, Alpha-II, City District Gautam Budh Nagar",
        "biller_reg_city": "Greater Noida",
        "biller_reg_pin": "201306",
        "biller_reg_state": "Uttar Pradesh",
        "biller_reg_country": "India",
        "biller_mode": "OFFLINEA",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Consumer Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{10}$",
                "error_message": "Please enter a valid Consumer Number with a maximum of 10 digits (eg. 2447931692)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/NPCL00000NOI01.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/NPCL00000NOI01.gif",
        "biller_type": "BILLER",
        "partial_pay": "Y",
        "pay_after_duedate": "Y",
        "online_validation": "Y",
        "isbillerbbps": "Y",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "RELI00000MUM01",
        "biller_legal_name": "Reliance Energy Limited",
        "biller_name": "Reliance Energy",
        "biller_location": "Mumbai",
        "biller_category": "Electricity",
        "biller_reg_address": "Reliance Energy Limited, Reliance Energy Centre, SantaCruz (East)",
        "biller_reg_city": "Mumbai",
        "biller_reg_pin": "400055",
        "biller_reg_state": "Maharashtra",
        "biller_reg_country": "India",
        "biller_mode": "OFFLINEA",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Consumer number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^1[0-9]{8}$",
                "error_message": "Please enter a valid 9 digit Consumer Number (eg. 151671580)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/RELI00000MUM01.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/RELI00000MUM01.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "Y",
        "online_validation": "Y",
        "isbillerbbps": "Y",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "JVVNL0000RAJ01",
        "biller_legal_name": "Jaipur Vidyut Vitran Nigam",
        "biller_name": "Jaipur Vidyut Nigam (JVVNL)",
        "biller_location": "Rajasthan",
        "biller_category": "Electricity",
        "biller_reg_address": "Vidyut Bhawan, Janpath",
        "biller_reg_city": "Jaipur",
        "biller_reg_pin": "302005",
        "biller_reg_state": "Rajasthan",
        "biller_reg_country": "India",
        "biller_mode": "ONLINE",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "K Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{12}$",
                "error_message": "Please enter a valid 12 digits K Number (eg. 310116001114)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/JVVNL0000RAJ01.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/JVVNL0000RAJ01.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "Y",
        "online_validation": "Y",
        "isbillerbbps": "Y",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "SPDCLOB00ANP01",
        "biller_legal_name": "Southern Power Distribution Co Ltd of Andhra Pradesh",
        "biller_name": "Southern Power Distribution (APSPDCL)",
        "biller_location": "Andhra Pradesh",
        "biller_category": "Electricity",
        "biller_reg_address": "APSPDCL, Tiruchanoor Road, Behind Srinivasa Kalyana Mandapam, Kesavayani Gunta",
        "biller_reg_city": "Tirupati",
        "biller_reg_pin": "517501",
        "biller_reg_state": "Andhra Pradesh",
        "biller_reg_country": "India",
        "biller_mode": "ONLINE",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Service Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{9,13}$",
                "error_message": "Please enter a valid Service Number between 9 to 13 digits (eg. 1111100000084)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/SPDCLOB00ANP01.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/SPDCLOB00ANP01.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "Y",
        "online_validation": "Y",
        "isbillerbbps": "Y",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "TORR00000AGR01",
        "biller_legal_name": "Torrent Power Limited - Agra",
        "biller_name": "Torrent Power - Agra",
        "biller_location": "Agra",
        "biller_category": "Electricity",
        "biller_reg_address": "Torrent House, Off Ashram Road",
        "biller_reg_city": "Ahmedabad",
        "biller_reg_pin": "380009",
        "biller_reg_state": "Gujarat",
        "biller_reg_country": "India",
        "biller_mode": "OFFLINEA",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Service Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{1,15}$",
                "error_message": "Please enter a valid Service Number that is a maximum of 20 digits (eg. 4376280)",
                "seq": "1"
            },
            {
                "parameter_name": "City",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^(Agra)$",
                "error_message": "Please enter valid city name (eg. Agra)",
                "seq": "2"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/TORR00000AGR01.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/TORR00000AGR01.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "Y",
        "isbillerbbps": "Y",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "TORR00000AHM02",
        "biller_legal_name": "Torrent Power Limited - Ahmedabad",
        "biller_name": "Torrent Power - Ahmedabad",
        "biller_location": "Ahmedabad",
        "biller_category": "Electricity",
        "biller_reg_address": "Torrent House, Off Ashram Road",
        "biller_reg_city": "Ahmedabad",
        "biller_reg_pin": "380009",
        "biller_reg_state": "Gujarat",
        "biller_reg_country": "India",
        "biller_mode": "OFFLINEA",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "5000000.00"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Service Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{1,15}$",
                "error_message": "Please enter a valid Service Number that is a maximum of 20 digits (eg. 103459)",
                "seq": "1"
            },
            {
                "parameter_name": "City",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^(Ahmedabad)$",
                "error_message": "Please enter valid city name (eg. Ahmedabad)",
                "seq": "2"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/TORR00000AHM02.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/TORR00000AHM02.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "Y",
        "isbillerbbps": "Y",
        "paymentamount_validation": "N",
        "customer_conv_fee": [
            {
                "payment_method": "BankAccount",
                "payment_channel": "MobileBanking",
                "bou_conv_fee_type": "fixed",
                "bou_conv_fee": "5.00",
                "amount_slab_start": "0.00",
                "amount_slab_end": "99999999.99"
            },
            {
                "payment_method": "BankAccount",
                "payment_channel": "Internet",
                "bou_conv_fee_type": "fixed",
                "bou_conv_fee": "5.00",
                "amount_slab_start": "0.00",
                "amount_slab_end": "99999999.99"
            },
            {
                "payment_method": "BankAccount",
                "payment_channel": "Mobile",
                "bou_conv_fee_type": "fixed",
                "bou_conv_fee": "5.00",
                "amount_slab_start": "0.00",
                "amount_slab_end": "99999999.99"
            },
            {
                "payment_method": "CreditCard",
                "payment_channel": "Mobile",
                "bou_conv_fee_type": "fixed",
                "bou_conv_fee": "5.00",
                "amount_slab_start": "0.00",
                "amount_slab_end": "99999999.99"
            },
            {
                "payment_method": "CreditCard",
                "payment_channel": "Internet",
                "bou_conv_fee_type": "fixed",
                "bou_conv_fee": "5.00",
                "amount_slab_start": "0.00",
                "amount_slab_end": "99999999.99"
            },
            {
                "payment_method": "CreditCard",
                "payment_channel": "MobileBanking",
                "bou_conv_fee_type": "fixed",
                "bou_conv_fee": "5.00",
                "amount_slab_start": "0.00",
                "amount_slab_end": "99999999.99"
            }
        ]
    },
    {
        "objectid": "biller",
        "billerid": "RELLIFE",
        "biller_legal_name": "Reliance Life Insurance Company Limited",
        "biller_name": "Reliance Life Insurance",
        "biller_location": "National",
        "biller_category": "Insurance",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Policy Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{8}$",
                "error_message": "Please enter a valid 8 digit Policy Number (eg. 00212240)",
                "seq": "1"
            },
            {
                "parameter_name": "Date of Birth",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{4}(0[1-9]|1[012])(0[1-9]|[12][0-9]|3[01])$",
                "error_message": "Please enter a valid Date of Birth in YYYYMMDD format (eg. 19871015)",
                "seq": "2"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/RELLIFE.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/RELLIFE.gif",
        "biller_type": "BILLER",
        "partial_pay": "Y",
        "pay_after_duedate": "Y",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "PVVNL",
        "biller_legal_name": "Paschimanchal Vidyut Vitaran Nigam Limited",
        "biller_name": "Paschimanchal Vidyut Vitaran Nigam",
        "biller_location": "Uttar Pradesh",
        "biller_category": "Electricity",
        "biller_reg_city": "Uttar Pradesh",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Account ID",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[0-9]{10}$",
                "error_message": "Please enter a valid 10 digit Account ID (eg.  0000110597)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/PVVNL.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/PVVNL.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "CHILDLINE",
        "biller_legal_name": "Childline India Foundation",
        "biller_name": "Childline India Foundation",
        "biller_location": "National",
        "biller_category": "Donation",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Name",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[0-9a-zA-Z\\s\\.]{3,40}$",
                "error_message": "Please enter a valid Name between 3 to 40 characters (eg. AARTI D SURVE)",
                "seq": "1"
            },
            {
                "parameter_name": "Address Line 1",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[A-Za-z0-9\\#\\-\\_\\(\\.\\)\\s\\,\\&\\/\\[\\]\\\\]{5,60}$",
                "error_message": "Please enter a valid Address between 5 to 60 characters (eg. New Link Road, Andheri West, Mumbai)",
                "seq": "2"
            },
            {
                "parameter_name": "Address Line 2",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^[A-Za-z0-9\\#\\-\\_\\(\\.\\)\\s\\,\\&\\/\\[\\]\\\\]{5,60}$",
                "error_message": "Please enter a valid Address between 5 to 60 characters (eg. New Link Road, Andheri West, Mumbai)",
                "seq": "3"
            },
            {
                "parameter_name": "Contribution Scheme",
                "data_type": "List",
                "optional": "N",
                "regex": "Education|Health Care|Vocal Training",
                "error_message": "Please select a valid Contribution Scheme from the list",
                "seq": "4",
                "list_of_values": [
                    {
                        "name": "Education",
                        "value": "Education"
                    },
                    {
                        "name": "Health Care",
                        "value": "Health Care"
                    },
                    {
                        "name": "Vocal Training",
                        "value": "Vocal Training"
                    }
                ]
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/CHILDLINE.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/CHILDLINE.gif",
        "biller_type": "PAYEE",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "INDUSCARD",
        "biller_legal_name": "Indusind Bank Limited - Card",
        "biller_name": "Indusind Bank Credit Card",
        "biller_location": "National",
        "biller_category": "Credit Card",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "N"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "N"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Indus Ind Card Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^376944[0-9]{9}$|^377040[0-9]{9}$|^377041[0-9]{9}$|^377043[0-9]{9}$|^402368[0-9]{10}$|^402853[0-9]{10}$|^405533[0-9]{10}$|^407651[0-9]{10}$|^414752[0-9]{10}$|^414772[0-9]{10}$|^441283[0-9]{10}$|^441284[0-9]{10}$|^441285[0-9]{10}$|^463787[0-9]{10}$|^516068[0-9]{10}$|^526861[0-9]{10}$|^553408[0-9]{10}$|^498726[0-9]{10}$|^377151[0-9]{9}$|^468936[0-9]{10}$|^537652[0-9]{10}$|^524480[0-9]{10}$|^427124[0-9]{10}$",
                "error_message": "Please enter a valid 16 digit IndusInd Card Number (eg. 377151XXXXXX0000)",
                "seq": "1",
                "encryption_required": "Y"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/INDUSCARD.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/INDUSCARD.gif",
        "biller_type": "PAYEE",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "PRAMMF",
        "biller_legal_name": "DHFL Pramerica Mutual Fund",
        "biller_name": "DHFL Pramerica Mutual Fund",
        "biller_location": "National",
        "biller_category": "Mutual Fund",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Unique Registration No.",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^PM[0-9a-zA-Z]{6}[\\-]{1}[0-9a-zA-Z]{6}$",
                "error_message": "Please enter a valid Unique Registration Number (eg. PM011770-A00245)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/PRAMMF.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/PRAMMF.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "BNPPARMF",
        "biller_legal_name": "BNP Paribas Mutual Fund",
        "biller_name": "BNP Paribas Mutual Fund",
        "biller_location": "National",
        "biller_category": "Mutual Fund",
        "biller_reg_city": "National",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "ATM",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Agent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BankBranch",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "BusinessCorrespondent",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Internet",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "Kiosk",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MPOS",
                "min_limit": "1.00",
                "max_limit": "200000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            },
            {
                "payment_channel": "POS",
                "min_limit": "1.00",
                "max_limit": "99999999.99"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "01-03-2018 12:12:10",
        "authenticators": [
            {
                "parameter_name": "Unique Registration Number",
                "data_type": "AlphaNumeric",
                "optional": "N",
                "regex": "^BN[0-9a-zA-Z]{6}[\\-]{1}[0-9]{6}$",
                "error_message": "Please enter a valid Unique Registration Number (eg. BNDIRECT-012362)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/BNPPARMF.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/BNPPARMF.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "N",
        "online_validation": "N",
        "isbillerbbps": "N",
        "paymentamount_validation": "N"
    },
    {
        "objectid": "biller",
        "billerid": "VODA00000NAT02",
        "biller_legal_name": "Vodafone India Limited - Postpaid",
        "biller_name": "Vodafone Postpaid",
        "biller_location": "National",
        "biller_category": "Mobile Postpaid",
        "biller_reg_address": "Peninsula Corporate Park, Ganpatrao Kadam Marg, Lower Parel",
        "biller_reg_city": "Mumbai",
        "biller_reg_pin": "400013",
        "biller_reg_state": "Maharashtra",
        "biller_reg_country": "India",
        "biller_mode": "ONLINE",
        "allowed_payment_methods": [
            {
                "payment_method": "BankAccount",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "CreditCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            },
            {
                "payment_method": "DebitCard",
                "min_limit": "1.00",
                "autopay_allowed": "Y"
            }
        ],
        "payment_channels": [
            {
                "payment_channel": "InternetBanking",
                "min_limit": "1.00",
                "max_limit": "1000000.00"
            },
            {
                "payment_channel": "Mobile",
                "min_limit": "1.00",
                "max_limit": "1000000.00"
            },
            {
                "payment_channel": "MobileBanking",
                "min_limit": "1.00",
                "max_limit": "1000000.00"
            }
        ],
        "biller_status": "ACTIVE",
        "biller_created_date": "06-03-2019 15:13:53",
        "authenticators": [
            {
                "parameter_name": "Mobile Number",
                "data_type": "Numeric",
                "optional": "N",
                "regex": "^[1-9]{1}[0-9]{9}$",
                "error_message": "Please enter a valid 10 digit Mobile Number (eg. 9419189938)",
                "seq": "1"
            }
        ],
        "biller_logo": "https://payments.billdesk.com/hg/images/billerlogo/VODA00000NAT01.gif",
        "biller_bill_copy": "https://payments.billdesk.com/hg/images/billcopy/VODA00000NAT01.gif",
        "biller_type": "BILLER",
        "partial_pay": "N",
        "pay_after_duedate": "Y",
        "online_validation": "Y",
        "isbillerbbps": "Y"
    }
]


billers = JSON.parse(billers);
