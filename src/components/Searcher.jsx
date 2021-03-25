import React from "react";

const Searcher = () => {
	return (
		<div className="leet-central-right">
			<div class="leet-central-right-search">
				<form action="cards.php" method="GET" role="form">
					<div class="leet-central-right-search-welcome">Good day everyone</div>
					<div class="leet-central-right-search-title">SEARCH HERE</div>
					<div class="leet-central-right-search-options">
						<div class="leet-central-right-search-options-item">
							<textarea
								placeholder="Search Your BIN"
								name="BIN"
								rows="2"
							></textarea>
						</div>
						<div class="leet-central-right-search-options-item">
							<select name="type" id="type">
								<option value="" selected="">
									CARD TYPE
								</option>
								<optgroup label="- - - - - - -">
									<option value="0">ALL</option>
									<option value="4">VISA</option>
									<option value="5">MASTERCARD</option>
									<option value="6">DISCOVER</option>
									<option value="3">AmEx</option>
								</optgroup>
							</select>
						</div>
						<div class="leet-central-right-search-options-item">
							<select name="T2">
								<option value="" selected="">
									LEVEL
								</option>
								<optgroup label="- - - - - - - - - - -">
									<option selected="selected" value="0">
										LEVEL
									</option>
									<option value="AIRMILES PREMIER">AIRMILES PREMIER</option>
									<option value="ATM CARD">ATM CARD</option>
									<option value="ATM ONLY">ATM ONLY</option>
									<option value="ATM ONLY - CASHLINE CARD">
										ATM ONLY - CASHLINE CARD
									</option>
									<option value="BLACK">BLACK</option>
									<option value="BLUE">BLUE</option>
									<option value="BLUE  REVOLVING">BLUE REVOLVING</option>
									<option value="BLUE AIRMILES CASH BACK CARD">
										BLUE AIRMILES CASH BACK CARD
									</option>
									<option value="BLUE FOR BUSINESS">BLUE FOR BUSINESS</option>
									<option value="BMI PLUS">BMI PLUS</option>
									<option value="BONUS">BONUS</option>
									<option value="BUSINESS">BUSINESS</option>
									<option value="BUSINESS CARD">BUSINESS CARD</option>
									<option value="CASH REBATE">CASH REBATE</option>
									<option value="CENTURION">CENTURION</option>
									<option value="CENTURION SERVICIO">CENTURION SERVICIO</option>
									<option value="CHARGE">CHARGE</option>
									<option value="CHECK CARD">CHECK CARD</option>
									<option value="CLASSIC">CLASSIC</option>
									<option value="CONSUMER CARD">CONSUMER CARD</option>
									<option value="CONSUMER PREMIUM CARD">
										CONSUMER PREMIUM CARD
									</option>
									<option value="CORP. GOLD S  RANGES">
										CORP. GOLD S RANGES
									</option>
									<option value="CORP. PURCHASING CARD">
										CORP. PURCHASING CARD
									</option>
									<option value="CORP.GOLD D  RANGES">
										CORP.GOLD D RANGES
									</option>
									<option value="CORP.GREEN D  RANGES">
										CORP.GREEN D RANGES
									</option>
									<option value="CORP.GREEN S  RANGES">
										CORP.GREEN S RANGES
									</option>
									<option value="CORPO.CO.S  RANGES">CORPO.CO.S RANGES</option>
									<option value="CORPORATE">CORPORATE</option>
									<option value="CORPORATE CARD">CORPORATE CARD</option>
									<option value="CORPORATE FLEET CARD">
										CORPORATE FLEET CARD
									</option>
									<option value="CORPORATE GOLD">CORPORATE GOLD</option>
									<option value="CORPORATE GOLD Y PLATINUM">
										CORPORATE GOLD Y PLATINUM
									</option>
									<option value="CORPORATE GREEN">CORPORATE GREEN</option>
									<option value="CORPORATE GREEN EBTA">
										CORPORATE GREEN EBTA
									</option>
									<option value="CORPORATE PURCHASE">CORPORATE PURCHASE</option>
									<option value="CORPORATE PURCHASING">
										CORPORATE PURCHASING
									</option>
									<option value="CORPORATE REVOLVING">
										CORPORATE REVOLVING
									</option>
									<option value="CORPORATE T">CORPORATE T</option>
									<option value="CORPORATE T  E">CORPORATE T E</option>
									<option value="CORPORATE TE">CORPORATE TE</option>
									<option value="DEBIT">DEBIT</option>
									<option value="DIREKT">DIREKT</option>
									<option value="DORADA">DORADA</option>
									<option value="ELECTRIC ORANGE">ELECTRIC ORANGE</option>
									<option value="ELECTRON">ELECTRON</option>
									<option value="GIFT">GIFT</option>
									<option value="GLOBAL PAYMENT">GLOBAL PAYMENT</option>
									<option value="GOLD">GOLD</option>
									<option value="GOLD  PLATINUM">GOLD PLATINUM</option>
									<option value="GOLD CASH BACK CARD">
										GOLD CASH BACK CARD
									</option>
									<option value="GOLD GRCC YBLUE">GOLD GRCC YBLUE</option>
									<option value="GOLD PREMIUM">GOLD PREMIUM</option>
									<option value="GOLD/PLATINUM">GOLD/PLATINUM</option>
									<option value="GOLD/PREM">GOLD/PREM</option>
									<option value="GREEN">GREEN</option>
									<option value="GSA CARD">GSA CARD</option>
									<option value="ICARD">ICARD</option>
									<option value="IKEA CARD">IKEA CARD</option>
									<option value="INFINITE">INFINITE</option>
									<option value="LOWES CARD">LOWES CARD</option>
									<option value="MASTERMONEY">MASTERMONEY</option>
									<option value="MULTICURRENCY CORPORATE T">
										MULTICURRENCY CORPORATE T
									</option>
									<option value="NEW WORLD">NEW WORLD</option>
									<option value="OPTIMA">OPTIMA</option>
									<option value="OTHER">OTHER</option>
									<option value="OUROCARD">OUROCARD</option>
									<option value="PAYMENT CARD">PAYMENT CARD</option>
									<option value="PEONY">PEONY</option>
									<option value="PEONY MONEY LINK">PEONY MONEY LINK</option>
									<option value="PEONY QUASI-CREDIT CARD">
										PEONY QUASI-CREDIT CARD
									</option>
									<option value="PIN ONLY W/O EBT">PIN ONLY W/O EBT</option>
									<option value="PLATINUM">PLATINUM</option>
									<option value="PLUS">PLUS</option>
									<option value="PREMIER">PREMIER</option>
									<option value="PREMIUM">PREMIUM</option>
									<option value="PREMIUM GOLD">PREMIUM GOLD</option>
									<option value="PREMIUM PLUS">PREMIUM PLUS</option>
									<option value="PREPAID">PREPAID</option>
									<option value="PRIVATE LABEL">PRIVATE LABEL</option>
									<option value="PROPRIETARY">PROPRIETARY</option>
									<option value="PROPRIETARY ATM">PROPRIETARY ATM</option>
									<option value="PURCHASING">PURCHASING</option>
									<option value="QUANTUM">QUANTUM</option>
									<option value="REVOLVING">REVOLVING</option>
									<option value="SBS GOLD Y BLUE">SBS GOLD Y BLUE</option>
									<option value="SIGNATURE">SIGNATURE</option>
									<option value="SIGNATURE BUSINESS">SIGNATURE BUSINESS</option>
									<option value="SMALL BUSINESS">SMALL BUSINESS</option>
									<option value="SMALL BUSINESS SBS GREEN">
										SMALL BUSINESS SBS GREEN
									</option>
									<option value="SMALL CORPORATE">SMALL CORPORATE</option>
									<option value="STANDARD">STANDARD</option>
									<option value="TJ PERSONAL">TJ PERSONAL</option>
									<option value="TRAVEL MONEY">TRAVEL MONEY</option>
									<option value="V PAY">V PAY</option>
									<option value="VIRGIN ATLANTIC">VIRGIN ATLANTIC</option>
									<option value="VISA CASH">VISA CASH</option>
									<option value="VISA COMMERCE">VISA COMMERCE</option>
									<option value="WORLD">WORLD</option>
									<option value="WORLD CARD">WORLD CARD</option>
									<option value="WORLD DEBIT EMBOSSED">
										WORLD DEBIT EMBOSSED
									</option>
									<option value="WORLD ELITE">WORLD ELITE</option>
									<option value="WORLD FOR BUSINESS">WORLD FOR BUSINESS</option>
								</optgroup>
							</select>
						</div>
						<div class="leet-central-right-search-options-item">
							<select name="CT">
								<option value="0" selected="">
									COUNTRY
								</option>
								<optgroup label="- - - - - - - - - - - - - - -">
									<option value="AF">Afghanistan</option>
									<option value="AX">Åland Islands</option>
									<option value="AL">Albania</option>
									<option value="DZ">Algeria</option>
									<option value="AS">American Samoa</option>
									<option value="AD">Andorra</option>
									<option value="AO">Angola</option>
									<option value="AI">Anguilla</option>
									<option value="AQ">Antarctica</option>
									<option value="AG">Antigua and Barbuda</option>
									<option value="AR">Argentina</option>
									<option value="AM">Armenia</option>
									<option value="AW">Aruba</option>
									<option value="AU">Australia</option>
									<option value="AT">Austria</option>
									<option value="AZ">Azerbaijan</option>
									<option value="BS">Bahamas</option>
									<option value="BH">Bahrain</option>
									<option value="BD">Bangladesh</option>
									<option value="BB">Barbados</option>
									<option value="BY">Belarus</option>
									<option value="BE">Belgium</option>
									<option value="BZ">Belize</option>
									<option value="BJ">Benin</option>
									<option value="BM">Bermuda</option>
									<option value="BT">Bhutan</option>
									<option value="BO">Bolivia, Plurinational State of</option>
									<option value="BQ">Bonaire, Sint Eustatius and Saba</option>
									<option value="BA">Bosnia and Herzegovina</option>
									<option value="BW">Botswana</option>
									<option value="BV">Bouvet Island</option>
									<option value="BR">Brazil</option>
									<option value="IO">British Indian Ocean Territory</option>
									<option value="BN">Brunei Darussalam</option>
									<option value="BG">Bulgaria</option>
									<option value="BF">Burkina Faso</option>
									<option value="BI">Burundi</option>
									<option value="KH">Cambodia</option>
									<option value="CM">Cameroon</option>
									<option value="CA">Canada</option>
									<option value="CV">Cape Verde</option>
									<option value="KY">Cayman Islands</option>
									<option value="CF">Central African Republic</option>
									<option value="TD">Chad</option>
									<option value="CL">Chile</option>
									<option value="CN">China</option>
									<option value="CX">Christmas Island</option>
									<option value="CC">Cocos (Keeling) Islands</option>
									<option value="CO">Colombia</option>
									<option value="KM">Comoros</option>
									<option value="CG">Congo</option>
									<option value="CD">
										Congo, the Democratic Republic of the
									</option>
									<option value="CK">Cook Islands</option>
									<option value="CR">Costa Rica</option>
									<option value="CI">Côte dIvoire</option>
									<option value="HR">Croatia</option>
									<option value="CU">Cuba</option>
									<option value="CW">Curaçao</option>
									<option value="CY">Cyprus</option>
									<option value="CZ">Czech Republic</option>
									<option value="DK">Denmark</option>
									<option value="DJ">Djibouti</option>
									<option value="DM">Dominica</option>
									<option value="DO">Dominican Republic</option>
									<option value="EC">Ecuador</option>
									<option value="EG">Egypt</option>
									<option value="SV">El Salvador</option>
									<option value="GQ">Equatorial Guinea</option>
									<option value="ER">Eritrea</option>
									<option value="EE">Estonia</option>
									<option value="ET">Ethiopia</option>
									<option value="FK">Falkland Islands (Malvinas)</option>
									<option value="FO">Faroe Islands</option>
									<option value="FJ">Fiji</option>
									<option value="FI">Finland</option>
									<option value="FR">France</option>
									<option value="GF">French Guiana</option>
									<option value="PF">French Polynesia</option>
									<option value="TF">French Southern Territories</option>
									<option value="GA">Gabon</option>
									<option value="GM">Gambia</option>
									<option value="GE">Georgia</option>
									<option value="DE">Germany</option>
									<option value="GH">Ghana</option>
									<option value="GI">Gibraltar</option>
									<option value="GR">Greece</option>
									<option value="GL">Greenland</option>
									<option value="GD">Grenada</option>
									<option value="GP">Guadeloupe</option>
									<option value="GU">Guam</option>
									<option value="GT">Guatemala</option>
									<option value="GG">Guernsey</option>
									<option value="GN">Guinea</option>
									<option value="GW">Guinea-Bissau</option>
									<option value="GY">Guyana</option>
									<option value="HT">Haiti</option>
									<option value="HM">Heard Island and McDonald Islands</option>
									<option value="VA">Holy See (Vatican City State)</option>
									<option value="HN">Honduras</option>
									<option value="HK">Hong Kong</option>
									<option value="HU">Hungary</option>
									<option value="IS">Iceland</option>
									<option value="IN">India</option>
									<option value="ID">Indonesia</option>
									<option value="IR">Iran, Islamic Republic of</option>
									<option value="IQ">Iraq</option>
									<option value="IE">Ireland</option>
									<option value="IM">Isle of Man</option>
									<option value="IL">Israel</option>
									<option value="IT">Italy</option>
									<option value="JM">Jamaica</option>
									<option value="JP">Japan</option>
									<option value="JE">Jersey</option>
									<option value="JO">Jordan</option>
									<option value="KZ">Kazakhstan</option>
									<option value="KE">Kenya</option>
									<option value="KI">Kiribati</option>
									<option value="KP">
										Korea, Democratic Peoples Republic of
									</option>
									<option value="KR">Korea, Republic of</option>
									<option value="KW">Kuwait</option>
									<option value="KG">Kyrgyzstan</option>
									<option value="LA">Lao Peoples Democratic Republic</option>
									<option value="LV">Latvia</option>
									<option value="LB">Lebanon</option>
									<option value="LS">Lesotho</option>
									<option value="LR">Liberia</option>
									<option value="LY">Libya</option>
									<option value="LI">Liechtenstein</option>
									<option value="LT">Lithuania</option>
									<option value="LU">Luxembourg</option>
									<option value="MO">Macao</option>
									<option value="MK">
										Macedonia, the former Yugoslav Republic of
									</option>
									<option value="MG">Madagascar</option>
									<option value="MW">Malawi</option>
									<option value="MY">Malaysia</option>
									<option value="MV">Maldives</option>
									<option value="ML">Mali</option>
									<option value="MT">Malta</option>
									<option value="MH">Marshall Islands</option>
									<option value="MQ">Martinique</option>
									<option value="MR">Mauritania</option>
									<option value="MU">Mauritius</option>
									<option value="YT">Mayotte</option>
									<option value="MX">Mexico</option>
									<option value="FM">Micronesia, Federated States of</option>
									<option value="MD">Moldova, Republic of</option>
									<option value="MC">Monaco</option>
									<option value="MN">Mongolia</option>
									<option value="ME">Montenegro</option>
									<option value="MS">Montserrat</option>
									<option value="MA">Morocco</option>
									<option value="MZ">Mozambique</option>
									<option value="MM">Myanmar</option>
									<option value="NA">Namibia</option>
									<option value="NR">Nauru</option>
									<option value="NP">Nepal</option>
									<option value="NL">Netherlands</option>
									<option value="NC">New Caledonia</option>
									<option value="NZ">New Zealand</option>
									<option value="NI">Nicaragua</option>
									<option value="NE">Niger</option>
									<option value="NG">Nigeria</option>
									<option value="NU">Niue</option>
									<option value="NF">Norfolk Island</option>
									<option value="MP">Northern Mariana Islands</option>
									<option value="NO">Norway</option>
									<option value="OM">Oman</option>
									<option value="PK">Pakistan</option>
									<option value="PW">Palau</option>
									<option value="PS">Palestinian Territory, Occupied</option>
									<option value="PA">Panama</option>
									<option value="PG">Papua New Guinea</option>
									<option value="PY">Paraguay</option>
									<option value="PE">Peru</option>
									<option value="PH">Philippines</option>
									<option value="PN">Pitcairn</option>
									<option value="PL">Poland</option>
									<option value="PT">Portugal</option>
									<option value="PR">Puerto Rico</option>
									<option value="QA">Qatar</option>
									<option value="RE">Réunion</option>
									<option value="RO">Romania</option>
									<option value="RU">Russian Federation</option>
									<option value="RW">Rwanda</option>
									<option value="BL">Saint Barthélemy</option>
									<option value="SH">
										Saint Helena, Ascension and Tristan da Cunha
									</option>
									<option value="KN">Saint Kitts and Nevis</option>
									<option value="LC">Saint Lucia</option>
									<option value="MF">Saint Martin (French part)</option>
									<option value="PM">Saint Pierre and Miquelon</option>
									<option value="VC">Saint Vincent and the Grenadines</option>
									<option value="WS">Samoa</option>
									<option value="SM">San Marino</option>
									<option value="ST">Sao Tome and Principe</option>
									<option value="SA">Saudi Arabia</option>
									<option value="SN">Senegal</option>
									<option value="RS">Serbia</option>
									<option value="SC">Seychelles</option>
									<option value="SL">Sierra Leone</option>
									<option value="SG">Singapore</option>
									<option value="SX">Sint Maarten (Dutch part)</option>
									<option value="SK">Slovakia</option>
									<option value="SI">Slovenia</option>
									<option value="SB">Solomon Islands</option>
									<option value="SO">Somalia</option>
									<option value="ZA">South Africa</option>
									<option value="GS">
										South Georgia and the South Sandwich Islands
									</option>
									<option value="SS">South Sudan</option>
									<option value="ES">Spain</option>
									<option value="LK">Sri Lanka</option>
									<option value="SD">Sudan</option>
									<option value="SR">Suriname</option>
									<option value="SJ">Svalbard and Jan Mayen</option>
									<option value="SZ">Swaziland</option>
									<option value="SE">Sweden</option>
									<option value="CH">Switzerland</option>
									<option value="SY">Syrian Arab Republic</option>
									<option value="TW">Taiwan, Province of China</option>
									<option value="TJ">Tajikistan</option>
									<option value="TZ">Tanzania, United Republic of</option>
									<option value="TH">Thailand</option>
									<option value="TL">Timor-Leste</option>
									<option value="TG">Togo</option>
									<option value="TK">Tokelau</option>
									<option value="TO">Tonga</option>
									<option value="TT">Trinidad and Tobago</option>
									<option value="TN">Tunisia</option>
									<option value="TR">Turkey</option>
									<option value="TM">Turkmenistan</option>
									<option value="TC">Turks and Caicos Islands</option>
									<option value="TV">Tuvalu</option>
									<option value="UG">Uganda</option>
									<option value="UA">Ukraine</option>
									<option value="AE">United Arab Emirates</option>
									<option value="GB">United Kingdom</option>
									<option value="US">United States</option>
									<option value="UM">
										United States Minor Outlying Islands
									</option>
									<option value="UY">Uruguay</option>
									<option value="UZ">Uzbekistan</option>
									<option value="VU">Vanuatu</option>
									<option value="VE">Venezuela, Bolivarian Republic of</option>
									<option value="VN">Viet Nam</option>
									<option value="VG">Virgin Islands, British</option>
									<option value="VI">Virgin Islands, U.S.</option>
									<option value="WF">Wallis and Futuna</option>
									<option value="EH">Western Sahara</option>
									<option value="YE">Yemen</option>
									<option value="ZM">Zambia</option>
									<option value="ZW">Zimbabwe</option>
								</optgroup>
							</select>
						</div>
						<div class="leet-central-right-search-options-item">
							<select name="VBV" class="">
								<option value="NON">VBV</option>
								<option class="" value="VBV">
									VBV PASSWORD
								</option>
							</select>
						</div>
						<div class="leet-central-right-search-options-item">
							<select name="city">
								<option value="" selected="">
									CITY
								</option>
								<optgroup label="- - - - - - - - - - - - - - -"></optgroup>
							</select>
						</div>
						<div class="leet-central-right-search-options-item">
							<input
								class=""
								type="text"
								name="Bank"
								id="Bank"
								value=""
								placeholder="Bank Search"
							/>
						</div>
						<button type="submit" name="card_search" class="button-right">
							SEARCH NOW
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Searcher;
