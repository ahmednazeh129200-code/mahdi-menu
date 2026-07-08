// menu-data.js — مطعم المهدى للمشويات — Shared Data Store v4.1 (Supabase REST API + localStorage fallback)
(function (global) {
  'use strict';

  const KEYS = {
    MENU: 'mahdi_menu_v3',
    ORDERS: 'mahdi_orders_v3',
    LANG: 'mahdi_lang',
  };

  const DEFAULT = {
    restaurant: {
      name_ar: 'مطعم المهدى للمشويات',
      name_en: 'Al-Mahdi Grill Restaurant',
      tagline_ar: 'أجود المشويات وأشهى النكهات منذ 2010',
      tagline_en: 'The Finest Grills & Richest Flavours Since 2010',
      phone: '+20 100 000 0000',
      address_ar: 'القاهرة، مصر',
      address_en: 'Cairo, Egypt',
      logo: '🔥',
      currency_ar: 'ج.م',
      currency_en: 'EGP',
      wifi_name: 'MAHDI_WIFI',
      wifi_pass: 'mahdi2024',
      table_count: 20,
      delivery_fee: 15,
      min_order: 50,
      open_time: '12:00',
      close_time: '02:00',
      rating: 4.9,
      reviews: 3200,
      facebook: '',
      instagram: '',
      whatsapp: '',
      google_map: '',
      theme: {
        font_title: 'Reem Kufi',
        font_body: 'Noto Sans Arabic',
        color_primary: '#fb9633',
        color_gold: '#fb9633',
        color_bg: '#f2f2f2',
        color_card: '#ffffff',
      },
    },
    categories: [
      { id: 'grills',     name_ar: 'المشويات',          name_en: 'Grills',       icon: '🔥', order: 1 },
      { id: 'burgers',    name_ar: 'البرجر',             name_en: 'Burgers',      icon: '🍔', order: 2 },
      { id: 'chicken',    name_ar: 'الدجاج',             name_en: 'Chicken',      icon: '🍗', order: 3 },
      { id: 'appetizers', name_ar: 'المقبلات',           name_en: 'Appetizers',   icon: '🥙', order: 4 },
      { id: 'sides',      name_ar: 'الأطباق الجانبية',  name_en: 'Sides',        icon: '🍟', order: 5 },
      { id: 'drinks',     name_ar: 'المشروبات',          name_en: 'Drinks',       icon: '🥤', order: 6 },
      { id: 'desserts',   name_ar: 'الحلويات',           name_en: 'Desserts',     icon: '🍰', order: 7 },
    ],
    items: [
      { id: 'g1', category: 'grills', available: true, name_ar: 'كباب مشوى', name_en: 'Grilled Kebab', desc_ar: 'كباب لحم بقري طازج مشوى على الفحم، متبل بأجود التوابل الشرقية، يُقدم مع الخبز والطحينة', desc_en: 'Fresh beef kebab grilled over charcoal, seasoned with premium oriental spices, served with bread & tahini', price: 45, old_price: 0, image: 'https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=600&h=400&fit=crop&auto=format', badge_ar: '⭐ الأكثر طلبًا', badge_en: '⭐ Best Seller', badge_color: '#FF6200' },
      { id: 'g2', category: 'grills', available: true, name_ar: 'كفتة مشوية', name_en: 'Grilled Kofta', desc_ar: 'كفتة لحم طازجة مفرومة ناعماً متبلة بالبصل والبقدونس وأجود التوابل المحلية', desc_en: 'Fresh finely minced meat kofta seasoned with onions, parsley and finest local spices', price: 40, old_price: 0, image: 'https://images.unsplash.com/photo-1544025162-d76538cf058?w=600&h=400&fit=crop&auto=format', badge_ar: '', badge_en: '', badge_color: '' },
      { id: 'g3', category: 'grills', available: true, name_ar: 'لحم ضاني مشوى', name_en: 'Grilled Lamb', desc_ar: 'لحم ضاني طازج من أجود الأصناف مشوى على الفحم بتوابل خاصة وعصير الليمون', desc_en: 'Premium fresh lamb grilled over charcoal with special spices and lemon juice', price: 75, old_price: 90, image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=600&h=400&fit=crop&auto=format', badge_ar: '👑 مميز', badge_en: '👑 Premium', badge_color: '#FFD700' },
      { id: 'g4', category: 'grills', available: true, name_ar: 'دجاج مشوى كامل', name_en: 'Whole Grilled Chicken', desc_ar: 'دجاج طازج كامل مشوى بالثوم والليمون والتوابل الخاصة مع أرز أو خبز', desc_en: 'Whole fresh chicken grilled with garlic, lemon and special spices, served with rice or bread', price: 65, old_price: 0, image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=600&h=400&fit=crop&auto=format', badge_ar: '', badge_en: '', badge_color: '' },
      { id: 'g5', category: 'grills', available: true, name_ar: 'ريش ضاني مشوية', name_en: 'Grilled Lamb Ribs', desc_ar: 'ريش ضاني طازجة مشوية ببطء على الفحم بتوابل المهدى السرية الخاصة', desc_en: 'Fresh lamb ribs slow-grilled over charcoal with Al-Mahdi exclusive secret spices', price: 95, old_price: 0, image: 'https://images.unsplash.com/photo-1544025162-d76538cf058?w=600&h=400&fit=crop&auto=format', badge_ar: '💎 نادر', badge_en: '💎 Rare', badge_color: '#FFD700' },
      { id: 'g6', category: 'grills', available: true, name_ar: '🔥 مشكل مشاوى فاخر', name_en: '🔥 Luxury Mixed Grill', desc_ar: 'تشكيلة فاخرة: كباب + كفتة + نصف دجاج + لحم ضاني + مقبلات + خبز — للشخصين', desc_en: 'Luxury platter: kebab + kofta + half chicken + lamb + appetizers + bread — serves 2', price: 145, old_price: 180, image: 'https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=600&h=400&fit=crop&auto=format', badge_ar: '👑 للشخصين', badge_en: '👑 For 2', badge_color: '#FFD700' },
      { id: 'b1', category: 'burgers', available: true, name_ar: 'برجر لحم كلاسيك', name_en: 'Classic Beef Burger', desc_ar: '180 جرام لحم بقري طازج مع جبن شيدر وخس وطماطم وبصل وصلصة المهدى الخاصة في خبز brioche', desc_en: '180g fresh beef patty with cheddar, lettuce, tomato, onion and Al-Mahdi special sauce in brioche bun', price: 55, old_price: 0, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop&auto=format', badge_ar: '🔥 الأحلى', badge_en: '🔥 Fan Fav', badge_color: '#FF6200' },
      { id: 'b2', category: 'burgers', available: true, name_ar: 'برجر دجاج مقرمش', name_en: 'Crispy Chicken Burger', desc_ar: 'صدر دجاج مقرمش في خبز brioche فاخر مع صوص تارتار، خس، وطماطم', desc_en: 'Crispy chicken breast in premium brioche bun with tartar sauce, lettuce and tomato', price: 48, old_price: 0, image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&h=400&fit=crop&auto=format', badge_ar: '', badge_en: '', badge_color: '' },
      { id: 'b3', category: 'burgers', available: true, name_ar: 'برجر سماش مزدوج', name_en: 'Double Smash Burger', desc_ar: 'برجران مسطحان smash style بجبنة مزدوجة وصلصة المهدى السرية وبصل مكرمل', desc_en: 'Two smash-style patties, double cheese, secret Al-Mahdi sauce, caramelized onion', price: 79, old_price: 0, image: 'https://images.unsplash.com/photo-1596956470007-2bf6095e7e16?w=600&h=400&fit=crop&auto=format', badge_ar: '💪 الأضخم', badge_en: '💪 Big One', badge_color: '#FF6200' },
      { id: 'c1', category: 'chicken', available: true, name_ar: 'أجنحة مشوية (6 قطع)', name_en: 'Grilled Wings (6 pcs)', desc_ar: 'أجنحة دجاج مشوية بصلصة الثوم والليمون الحارة مع صوص الغمس', desc_en: 'Chicken wings grilled in spicy garlic lemon sauce with dipping sauce', price: 48, old_price: 0, image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=600&h=400&fit=crop&auto=format', badge_ar: '🌶️ حار', badge_en: '🌶️ Spicy', badge_color: '#FF4500' },
      { id: 'c2', category: 'chicken', available: true, name_ar: 'نصف دجاج بالثوم', name_en: 'Half Garlic Chicken', desc_ar: 'نصف دجاج مشوى بصلصة الثوم الكريمية الخاصة مع التوم والليمون الطازج', desc_en: 'Half chicken grilled with special creamy garlic sauce, toum and fresh lemon', price: 58, old_price: 0, image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=600&h=400&fit=crop&auto=format', badge_ar: '', badge_en: '', badge_color: '' },
      { id: 'c3', category: 'chicken', available: true, name_ar: 'دجاج مقلي مقرمش', name_en: 'Crispy Fried Chicken', desc_ar: 'قطع دجاج مقلية مقرمشة بخلطة التوابل السرية، تُقدم مع صلصة مختارة وبطاطس', desc_en: 'Crispy fried chicken pieces with secret spice blend, served with dipping sauce and fries', price: 55, old_price: 0, image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=600&h=400&fit=crop&auto=format', badge_ar: '🆕 جديد', badge_en: '🆕 New', badge_color: '#00C851' },
      { id: 'a1', category: 'appetizers', available: true, name_ar: 'حمص طازج', name_en: 'Fresh Hummus', desc_ar: 'حمص طازج مطحون ناعم بزيت الزيتون البكر والبابريكا الحمراء والليمون', desc_en: 'Freshly ground smooth hummus with extra virgin olive oil, paprika and lemon', price: 22, old_price: 0, image: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=600&h=400&fit=crop&auto=format', badge_ar: '', badge_en: '', badge_color: '' },
      { id: 'a2', category: 'appetizers', available: true, name_ar: 'متبل الباذنجان', name_en: 'Eggplant Mutabal', desc_ar: 'باذنجان مشوى مهروس بالطحينة وزيت الزيتون والرمان والبقدونس الطازج', desc_en: 'Grilled eggplant mashed with tahini, olive oil, pomegranate and fresh parsley', price: 22, old_price: 0, image: 'https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?w=600&h=400&fit=crop&auto=format', badge_ar: '', badge_en: '', badge_color: '' },
      { id: 'a3', category: 'appetizers', available: true, name_ar: 'كبدة مشوية', name_en: 'Grilled Liver', desc_ar: 'كبدة ضاني طازجة مشوية بالفلفل الملون والثوم والكمون على النار مباشرة', desc_en: 'Fresh lamb liver grilled with colored pepper, garlic and cumin over open fire', price: 38, old_price: 0, image: 'https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=600&h=400&fit=crop&auto=format', badge_ar: '⭐ الأشهر', badge_en: '⭐ Popular', badge_color: '#FF6200' },
      { id: 'a4', category: 'appetizers', available: true, name_ar: 'سلطة خضراء طازجة', name_en: 'Fresh Garden Salad', desc_ar: 'سلطة خضروات طازجة موسمية بصلصة الليمون وزيت الزيتون البكر', desc_en: 'Seasonal fresh vegetable salad with lemon dressing and extra virgin olive oil', price: 18, old_price: 0, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop&auto=format', badge_ar: '', badge_en: '', badge_color: '' },
      { id: 's1', category: 'sides', available: true, name_ar: 'بطاطس محمرة', name_en: 'French Fries', desc_ar: 'بطاطس مقلية مقرمشة ذهبية اللون مع كاتشاب أو صلصة ثوم', desc_en: 'Golden crispy french fries with ketchup or garlic sauce', price: 22, old_price: 0, image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&h=400&fit=crop&auto=format', badge_ar: '', badge_en: '', badge_color: '' },
      { id: 's2', category: 'sides', available: true, name_ar: 'أرز بالشعرية', name_en: 'Vermicelli Rice', desc_ar: 'أرز مطبوخ بالشعرية والسمن البلدي الأصلي بطريقة مصرية أصيلة', desc_en: 'Rice cooked with vermicelli and original clarified butter, authentic Egyptian style', price: 15, old_price: 0, image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?w=600&h=400&fit=crop&auto=format', badge_ar: '', badge_en: '', badge_color: '' },
      { id: 's3', category: 'sides', available: true, name_ar: 'خبز مشوى بالثوم', name_en: 'Garlic Grilled Bread', desc_ar: 'خبز مشوى طازج بالثوم والزبدة الفرنسية والبقدونس الطازج', desc_en: 'Fresh grilled bread with garlic, French butter and fresh parsley', price: 12, old_price: 0, image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=400&fit=crop&auto=format', badge_ar: '', badge_en: '', badge_color: '' },
      { id: 'd1', category: 'drinks', available: true, name_ar: 'عصير برتقال طازج', name_en: 'Fresh Orange Juice', desc_ar: '100% عصير برتقال طازج معصور لحظياً بدون سكر مضاف', desc_en: '100% freshly squeezed orange juice, no added sugar', price: 28, old_price: 0, image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&h=400&fit=crop&auto=format', badge_ar: '🌿 طبيعي', badge_en: '🌿 Natural', badge_color: '#00C851' },
      { id: 'd2', category: 'drinks', available: true, name_ar: 'مشروب غازي', name_en: 'Soft Drink', desc_ar: 'كوكاكولا · بيبسي · سبرايت · فانتا — حسب اختيارك', desc_en: 'Coca-Cola · Pepsi · Sprite · Fanta — your choice', price: 15, old_price: 0, image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=600&h=400&fit=crop&auto=format', badge_ar: '', badge_en: '', badge_color: '' },
      { id: 'd3', category: 'drinks', available: true, name_ar: 'شاي مغربي بالنعناع', name_en: 'Moroccan Mint Tea', desc_ar: 'شاي أخضر مغربي بالنعناع الطازج والسكر الطبيعي', desc_en: 'Moroccan green tea with fresh mint and natural sugar', price: 12, old_price: 0, image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&h=400&fit=crop&auto=format', badge_ar: '', badge_en: '', badge_color: '' },
      { id: 'd4', category: 'drinks', available: true, name_ar: 'لاتيه شوكولاتة فاخرة', name_en: 'Luxury Chocolate Latte', desc_ar: 'لاتيه شوكولاتة بلجيكية ساخنة أو باردة بالحليب الكريمي وكريمة مخفوقة', desc_en: 'Belgian chocolate latte hot or iced with creamy milk and whipped cream', price: 35, old_price: 0, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&auto=format', badge_ar: '🆕 جديد', badge_en: '🆕 New', badge_color: '#00C851' },
      { id: 'ds1', category: 'desserts', available: true, name_ar: 'كنافة بالجبن الفريش', name_en: 'Cheese Kunafa', desc_ar: 'كنافة شاميه بالجبن الفريش والقطر العسلي الطبيعي، تُقدم ساخنة طازجة', desc_en: 'Shami kunafa with fresh cheese and natural honey syrup, served hot and fresh', price: 35, old_price: 0, image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=400&fit=crop&auto=format', badge_ar: '⭐ الأشهر', badge_en: '⭐ Famous', badge_color: '#FFD700' },
      { id: 'ds2', category: 'desserts', available: true, name_ar: 'أم علي بالكريمة', name_en: 'Om Ali with Cream', desc_ar: 'أم علي مصرية أصيلة بالكريمة الفريش والمكسرات المحمصة، تُخبز طازجة عند الطلب', desc_en: 'Authentic Egyptian Om Ali with fresh cream and toasted nuts, baked fresh to order', price: 38, old_price: 0, image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&h=400&fit=crop&auto=format', badge_ar: '', badge_en: '', badge_color: '' },
      { id: 'ds3', category: 'desserts', available: true, name_ar: 'آيس كريم فاخر', name_en: 'Luxury Ice Cream', desc_ar: '3 كرات آيس كريم فاخرة — شوكولاتة بلجيكية أو فانيلا بوربون أو فراولة طازجة', desc_en: '3 scoops of luxury ice cream — Belgian chocolate, Bourbon vanilla or fresh strawberry', price: 30, old_price: 0, image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&h=400&fit=crop&auto=format', badge_ar: '', badge_en: '', badge_color: '' },
    ],
  };

  function clone(obj) { return JSON.parse(JSON.stringify(obj)); }

  function generateOrderId() {
    return 'ORD-' + Date.now().toString(36).toUpperCase() + '-' +
      Math.random().toString(36).substr(2, 4).toUpperCase();
  }

  // ─── Supabase REST API wrapper ────────────────────────────────────
  async function sbFetch(path, options = {}) {
    const url = SB_URL + '/rest/v1/' + path;
    const headers = {
      'apikey': SB_KEY,
      'Authorization': 'Bearer ' + SB_KEY,
      'Content-Type': 'application/json',
      'Prefer': 'return=minimal',
    };
    if (options.headers) {
      Object.assign(headers, options.headers);
    }
    const res = await fetch(url, { ...options, headers });
    if (!res.ok) {
      console.warn('Supabase API error:', res.status, res.statusText);
    }
    return res;
  }

  async function sbGetAll(table, query) {
    try {
      const res = await sbFetch(table + '?' + (query || ''));
      if (res.status === 200) return await res.json();
    } catch (e) { console.warn('sbGetAll error:', e); }
    return null;
  }

  async function sbGetOne(table, query) {
    const arr = await sbGetAll(table, query);
    return arr && arr.length > 0 ? arr[0] : null;
  }

  async function sbUpsert(table, body, query) {
    try {
      await sbFetch(query ? table + '?' + query : table, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: { 'Prefer': 'resolution=merge-duplicates' },
      });
      return true;
    } catch (e) { return false; }
  }

  async function sbInsert(table, body) {
    try {
      await sbFetch(table, { method: 'POST', body: JSON.stringify(body) });
      return true;
    } catch (e) { return false; }
  }

  async function sbUpdate(table, body, query) {
    try {
      const res = await sbFetch(table + '?' + query, {
        method: 'PATCH',
        body: JSON.stringify(body),
      });
      return res.ok;
    } catch (e) { return false; }
  }

  // ─── Map Supabase row → internal order object ────────────────────
  function rowToOrder(r) {
    return {
      id: r.order_id,
      customer_name: r.customer_name,
      customer_phone: r.customer_phone,
      order_type: r.order_type,
      table: r.table_number,
      address: r.address,
      notes: r.notes,
      payment_method: r.payment_method,
      items: r.items || [],
      subtotal: r.subtotal || 0,
      delivery_fee: r.delivery_fee || 0,
      total: r.total || 0,
      status: r.status || 'pending',
      created_at: r.created_at,
      updated_at: r.updated_at,
    };
  }

  // ─── Public API ──────────────────────────────────────────────────
  global.MenuStore = {
    keys: KEYS,
    _data: null,
    _orders: null,
    _pollTimer: null,
    _initPromise: null,

    async init() {
      if (this._initPromise) return this._initPromise;

      this._initPromise = (async () => {
        // Try Supabase first
        const row = await sbGetOne('menu_data', 'select=*');
        if (row && row.restaurant && row.restaurant.name_ar) {
          this._data = {
            restaurant: row.restaurant,
            items: row.items || [],
            categories: row.categories || [],
          };
        } else {
          // Seed default data
          this._data = clone(DEFAULT);
          await sbUpsert('menu_data', {
            id: 1,
            restaurant: this._data.restaurant,
            items: this._data.items,
            categories: this._data.categories,
            updated_at: new Date().toISOString(),
          });
        }

        // Load orders
        const rows = await sbGetAll('orders', 'select=*&order=created_at.desc');
        if (rows) {
          this._orders = rows.map(rowToOrder);
        }
      })();

      // Always load localStorage as fallback
      try {
        const s = localStorage.getItem(KEYS.MENU);
        if (s) this._data = this._data || JSON.parse(s);
      } catch (e) {}
      if (!this._data) {
        try {
          const s = localStorage.getItem(KEYS.MENU);
          this._data = s ? JSON.parse(s) : clone(DEFAULT);
        } catch (e) { this._data = clone(DEFAULT); }
      }
      if (!this._orders) {
        try {
          const s = localStorage.getItem(KEYS.ORDERS);
          this._orders = s ? JSON.parse(s) : [];
        } catch (e) { this._orders = []; }
      }

      return this._initPromise;
    },

    getData() { return this._data || clone(DEFAULT); },

    async saveData(data) {
      this._data = data;
      const ok = await sbUpsert('menu_data', {
        id: 1,
        restaurant: data.restaurant,
        items: data.items,
        categories: data.categories,
        updated_at: new Date().toISOString(),
      });
      if (!ok) {
        localStorage.setItem(KEYS.MENU, JSON.stringify(data));
      }
    },

    getRestaurant() { return this.getData().restaurant; },
    getCategories() { return this.getData().categories; },
    getItems(catId) {
      const items = this.getData().items;
      return catId ? items.filter(i => i.category === catId) : items;
    },

    addItem(item) {
      const d = this.getData(); item.id = 'i_' + Date.now();
      d.items.push(item); this.saveData(d); return item;
    },
    updateItem(id, patch) {
      const d = this.getData(); const idx = d.items.findIndex(i => i.id === id);
      if (idx !== -1) { d.items[idx] = { ...d.items[idx], ...patch }; this.saveData(d); }
    },
    deleteItem(id) {
      const d = this.getData(); d.items = d.items.filter(i => i.id !== id); this.saveData(d);
    },
    toggleItem(id) {
      const d = this.getData(); const item = d.items.find(i => i.id === id);
      if (item) { item.available = !item.available; this.saveData(d); }
    },

    addCategory(cat) {
      const d = this.getData(); cat.id = 'cat_' + Date.now();
      d.categories.push(cat); this.saveData(d);
    },
    updateCategory(id, patch) {
      const d = this.getData(); const idx = d.categories.findIndex(c => c.id === id);
      if (idx !== -1) { d.categories[idx] = { ...d.categories[idx], ...patch }; this.saveData(d); }
    },
    deleteCategory(id) {
      const d = this.getData();
      d.categories = d.categories.filter(c => c.id !== id);
      d.items = d.items.filter(i => i.category !== id);
      this.saveData(d);
    },

    updateRestaurant(patch) {
      const d = this.getData(); d.restaurant = { ...d.restaurant, ...patch }; this.saveData(d);
    },

    getOrders() { return this._orders || []; },

    async saveOrder(orderData) {
      const order = {
        order_id: generateOrderId(),
        customer_name: orderData.customer_name,
        customer_phone: orderData.customer_phone,
        order_type: orderData.order_type,
        table_number: orderData.table || null,
        address: orderData.address || null,
        notes: orderData.notes || '',
        payment_method: orderData.payment_method,
        items: orderData.items || [],
        subtotal: orderData.subtotal || 0,
        delivery_fee: orderData.delivery_fee || 0,
        total: orderData.total || 0,
        status: 'pending',
        created_at: new Date().toISOString(),
      };
      this._orders = [{ ...order, id: order.order_id }, ...(this._orders || [])];

      const ok = await sbInsert('orders', order);
      if (!ok) {
        try {
          const orders = JSON.parse(localStorage.getItem(KEYS.ORDERS)) || [];
          orders.unshift({ ...order, id: order.order_id });
          localStorage.setItem(KEYS.ORDERS, JSON.stringify(orders));
        } catch (e) {}
      }
      return { ...order, id: order.order_id };
    },

    async updateOrderStatus(orderId, status) {
      if (this._orders) {
        const idx = this._orders.findIndex(o => o.id === orderId);
        if (idx !== -1) {
          this._orders[idx].status = status;
          this._orders[idx].updated_at = new Date().toISOString();
        }
      }
      const ok = await sbUpdate('orders',
        { status, updated_at: new Date().toISOString() },
        'order_id=eq.' + orderId
      );
      if (!ok) {
        try {
          const orders = JSON.parse(localStorage.getItem(KEYS.ORDERS)) || [];
          const idx = orders.findIndex(o => o.id === orderId);
          if (idx !== -1) {
            orders[idx].status = status;
            orders[idx].updated_at = new Date().toISOString();
            localStorage.setItem(KEYS.ORDERS, JSON.stringify(orders));
          }
        } catch (e) {}
      }
    },

    // Real-time: polling every 3 seconds (works on all devices, no CDN needed)
    onOrdersSnapshot(callback) {
      this._pollOrders = callback;
      if (this._pollTimer) return;
      this._pollTimer = setInterval(async () => {
        const rows = await sbGetAll('orders', 'select=*&order=created_at.desc');
        if (rows) {
          const orders = rows.map(rowToOrder);
          const oldJson = JSON.stringify(this._orders);
          const newJson = JSON.stringify(orders);
          if (oldJson !== newJson) {
            this._orders = orders;
            if (this._pollOrders) this._pollOrders(orders);
          }
        }
      }, 3000);
    },

    onMenuSnapshot(callback) {
      this._pollMenu = callback;
      if (this._menuPollTimer) return;
      this._menuPollTimer = setInterval(async () => {
        const row = await sbGetOne('menu_data', 'select=*');
        if (row && row.restaurant && row.restaurant.name_ar) {
          const oldJson = JSON.stringify(this._data);
          const newData = {
            restaurant: row.restaurant,
            items: row.items || [],
            categories: row.categories || [],
          };
          if (oldJson !== JSON.stringify(newData)) {
            this._data = newData;
            if (this._pollMenu) this._pollMenu(newData);
          }
        }
      }, 5000);
    },

    unsubscribeAll() {
      if (this._pollTimer) { clearInterval(this._pollTimer); this._pollTimer = null; }
      if (this._menuPollTimer) { clearInterval(this._menuPollTimer); this._menuPollTimer = null; }
    },

    async resetToDefault() {
      this._data = clone(DEFAULT);
      this._orders = [];
      await sbUpsert('menu_data', {
        id: 1, restaurant: this._data.restaurant,
        items: this._data.items, categories: this._data.categories,
        updated_at: new Date().toISOString(),
      });
      // Delete all orders
      await sbFetch('orders', { method: 'DELETE', headers: { 'Prefer': 'return=minimal' } });
      localStorage.removeItem(KEYS.MENU);
      localStorage.removeItem(KEYS.ORDERS);
    },

    getStats() {
      const orders = this._orders || [];
      const today = new Date().toDateString();
      const todayOrders = orders.filter(o => o.created_at && new Date(o.created_at).toDateString() === today);
      return {
        totalItems: (this._data && this._data.items) ? this._data.items.length : 0,
        totalOrders: orders.length,
        todayOrders: todayOrders.length,
        todayRevenue: todayOrders.reduce((s, o) => s + (o.total || 0), 0),
        totalRevenue: orders.reduce((s, o) => s + (o.total || 0), 0),
        pendingOrders: orders.filter(o => o.status === 'pending').length,
      };
    },

    getPendingOrdersCount() {
      return (this._orders || []).filter(o => o.status === 'pending').length;
    },
  };

  global.MAHDI_VERSION = '4.1';
})(window);
