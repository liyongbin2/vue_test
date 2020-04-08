import { request } from "./request";

export function getDetail (iid) {
  return request({
    url: 'detail',
    params: {
      iid
    }
  })
}

export function getRecommend () {
  return request({
    url: 'recommend'
  })
}
// 数据抽离

// 轮播图下方数据
export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.realPrice = itemInfo.highNowPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
  }
}

// 商家信息数据
export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.fans = shopInfo.cFans
    this.sells = shopInfo.cSells
    this.score = shopInfo.score
    this.goodCount = shopInfo.cGoods
  }
}

export class GoodsParam {
  constructor(info, rule) {
    // images可能没有值
    this.image = info.image ? info.image[0] : ''
    this.infos = info.set
    this.sizes = rule.tables
  }
}