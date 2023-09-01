import { Amount, Organization } from '../common'

export interface BankAccount {
  id: string
  수기계좌여부: boolean
  /**  수기계좌 일 경우 이 데이터는 존재하지 않음 */
  계좌번호?: string
  /** 메모 */
  메모?: string
  /** 사용자에게 표시되는 계좌명 (계좌 별칭 > 원본 계좌명) */
  계봐별칭: string
  /** 마지막 동기화 날짜 (수기계좌인 경우 존재하지 않음 ) */
  마지막동기화시각?: string
  /** 원본 계좌 상품명 (수가계좌인 경우 존재하지 않음 )*/
  원본계좌명?: string
  계좌종류: '입출금' | '예금' | '적금' | '자유적금' | '정기예금' | '신탁'
  /** interface Amount { amount0F: '10000', currencyIdentifier: 'KRW'} */
  계좌잔액: Amount
  /** 계좌의 숨기여부 설정 */
  숨김여부: boolean
  /** 개설 일시 */
  개설일?: string
  /** 만기 일시 */
  만기일?: string
  /** Organization { guid: N-BANK, 기관명: N은행, logoImageUrl: https://imgur.com/bAvXnmf} */
  기관정보: Organization
  /** 마이데이터 전송 요구에 대한 동의 */
  전송요구동의여부: boolean
  /** 송금인/수취인, 거래메모, 가맹점 정보 사용에 대한 동의 */
  적요동의여부: boolean
  금리2f: string
  /** 금리2f에 우대 금리가 포함된 적용된 금리, 은행에 따라 해당 데이터가 없을 수 있음 */
  적용금리2f?: string
  /**  입출금/신탁/예금/자유적금 일 경우 존재하지 않음 */
  월납입액?: Amount
  /**  입출금/신탁/예금/자유적금 일 경우 존재하지 않음 */
  월자동이체?: number
  /**  입출금/신탁/예금/자유적금 일 경우 존재하지 않음  */
  최종남입회차?: number
  /** 압류로 인해 출금이 불가능하거나 마이너스 통장 과 같이 출금 한도 금액이설정되어 있는 등의 경우에 계좌 잔액과 금액이 다를 수 있음.*/
  출금가능액?: Amount
  /** 마이너스 통장 여부 (수기계좌인 경우 undefined) */
  마이너스통장여부?: boolean
  /** 마이너스 통장 금리, 마이너스통장여부 값이 true일 경우에만 존재) */
  마이너스통장금리?: string
}
