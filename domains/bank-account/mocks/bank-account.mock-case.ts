import { AMOUNT_MOCK, ORGANIZATION_MOCK } from '@/domains/common/mocks'
import { BankAccount } from '../type'
import { BANK_ACCOUNT_RESPONSE_MOCK } from './bank-account.mock-factory'

export const 입출금계좌데이터: BankAccount = {
  ...BANK_ACCOUNT_RESPONSE_MOCK,
  계좌종류: '입출금',
  계좌잔액: { ...AMOUNT_MOCK, amount0F: (100_000).toString() },
  기관정보: {
    ...ORGANIZATION_MOCK,
    guid: 'N-BANK',
    logoImageUrl: 'https://imgur.com/bAvXnmf',
  },
}
export const 예금계좌데이터: BankAccount = {
  ...BANK_ACCOUNT_RESPONSE_MOCK,
  계좌종류: '예금',
  계좌잔액: { ...AMOUNT_MOCK, amount0F: (200_000).toString() },
  기관정보: {
    ...ORGANIZATION_MOCK,
    guid: 'K-BANK',
    logoImageUrl: 'https://imgur.com/IVMtiGt',
  },
}
export const 적금계좌데이터: BankAccount = {
  ...BANK_ACCOUNT_RESPONSE_MOCK,
  계좌종류: '적금',
  만기일: new Date('2025-01-11').getTime().toString(),
  월납입액: {
    ...BANK_ACCOUNT_RESPONSE_MOCK?.월납입액,
    amount0F: (300_000).toString(),
    currencyIdentifier: 'KRW',
  },
}
