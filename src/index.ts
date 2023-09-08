import { isValidEmail } from '../src/validartors/isValidEmail'
import { isPasswordMatched } from '../src/validartors/isPasswordMatched'
import { isValidURL } from '../src/validartors/isValidURL'
import { isValidPhoneNumber } from '../src/validartors/isValidPhoneNumber'
import { isValidDate } from '../src/validartors/isValidDate'
import { isStrongPassword } from '../src/validartors/isStrongPassword'
import { isValidUserName } from '../src/validartors/isValidUserName'
import { isValidFileExtension } from '../src/validartors/isValidFileExtention'
import { truncatedString } from '../src/util-functions/string-manipulation/truncateString'
import { sluggifiedString } from '../src/util-functions/string-manipulation/sluggifiedString'
import { dateFormatter } from '../src/util-functions/string-manipulation/dateFormatter'
import { shuffleArray } from '../src/util-functions/array-manipulation/shuffleArray'
import { chunkArray } from '../src/util-functions/array-manipulation/chunkArray'

export {
  isValidEmail,
  isPasswordMatched,
  isValidURL,
  isValidPhoneNumber,
  isValidDate,
  isStrongPassword,
  isValidUserName,
  isValidFileExtension,
  truncatedString,
  sluggifiedString,
  dateFormatter,
  shuffleArray,
  chunkArray
}
