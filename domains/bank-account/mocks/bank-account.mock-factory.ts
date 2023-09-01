import { AMOUNT_MOCK, ORGANIZATION_MOCK } from '@/domains/common/mocks'
import { BankAccount } from '../type'

export const BANK_ACCOUNT_RESPONSE_MOCK: BankAccount = {
  id: '1',
  계봐별칭: 'N뱅크 입출금통장',
  원본계좌명: 'N뱅크 입출금통장',
  계좌잔액: { ...AMOUNT_MOCK, amount0F: (100_000).toString() },
  계좌종류: '입출금',
  기관정보: { ...ORGANIZATION_MOCK, guid: 'N-BANK' },
  수기계좌여부: false,
  숨김여부: false,
  금리2f: (0.1 * 100).toString(),
  전송요구동의여부: true,
  적요동의여부: true,
  개설일: new Date('2021-01-11').getTime().toString(),
  계좌번호: '110298566180',
  출금가능액: { ...AMOUNT_MOCK, amount0F: (100_000).toString() },
}
