export interface Amount {
  /** 금액 0f란 grpc 이용시 number를 모두 string으로 다루기 때문에 생긴 규칙
   * f는 float의 약자로,
   * 0f는 일반 정수를 의미한다.
   * 1f는 0.1을 의미한다.
   */
  amount0F: string
  /** ISO 4217 Currency code */
  currencyIdentifier: 'KRW' | 'USD' | 'JPY' | 'CNY'
}

export interface Organization {
  /** 기관구분 global unique id
   * e.g. N-BANK
   * e.g. K-BANK
   * e.g. T-BANK
   */
  guid: string
  /** 기관명
   * e.g. N-BANK
   * e.g. K-BANK
   * e.g. T-BANK
   */
  기관명: string
  /**
   * 기관 로고 이미지 URL
   * e.g
   * https://imgur.com/bAvXnmfNY
   */
  logoImageUrl: string
}
