# @perrylink/dsh-checkers

**53-चेकर PerryLink अनुपालन सूट** के लिए एक-कमांड इंस्टॉलर।

```sh
dsh plugin --profile web add @perrylink/dsh-checkers
```

यह सभी चेकर इंस्टॉल करता है और एक ही bundle परत से सभी 53 Cordis पंक्तियाँ जोड़ता है।
हर चेकर का अपना npm नाम, नियम पैक, README और संस्करण रहता है; यह पैकेज केवल सूट
प्रवेश बिंदु है।

**दायरा:** चीनी दस्तावेज़ जाँच (व्यापार, सीमा शुल्क, निविदा, HSE, चिकित्सा, कानून,
सरकार, विनिर्माण)। हर चेकर केवल अंतर बताता है, कानूनी/चिकित्सीय/सीमा शुल्क निर्णय नहीं।
सटीक सूची और संस्करण `checkers.json` में हैं।

**अनइंस्टॉल:** `dsh plugin --profile web remove @perrylink/dsh-checkers`.

Apache-2.0. बदलाव के बाद `node build.mjs` चलाएँ।
