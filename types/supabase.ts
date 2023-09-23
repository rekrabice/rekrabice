export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      boxes: {
        Row: {
          active_loop_id: number | null
          batch_id: number
          box_id: number
          design_id: number
          material_id: number
          price_id: number
          size_id: number
          tracking_id: string
        }
        Insert: {
          active_loop_id?: number | null
          batch_id?: number
          box_id?: number
          design_id: number
          material_id: number
          price_id?: number
          size_id?: number
          tracking_id: string
        }
        Update: {
          active_loop_id?: number | null
          batch_id?: number
          box_id?: number
          design_id?: number
          material_id?: number
          price_id?: number
          size_id?: number
          tracking_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "boxes_active_loop_id_fkey"
            columns: ["active_loop_id"]
            referencedRelation: "loops"
            referencedColumns: ["loop_id"]
          },
          {
            foreignKeyName: "boxes_batch_id_fkey"
            columns: ["batch_id"]
            referencedRelation: "boxes_batches"
            referencedColumns: ["batch_id"]
          },
          {
            foreignKeyName: "boxes_design_id_fkey"
            columns: ["design_id"]
            referencedRelation: "boxes_designs"
            referencedColumns: ["design_id"]
          },
          {
            foreignKeyName: "boxes_material_id_fkey"
            columns: ["material_id"]
            referencedRelation: "boxes_materials"
            referencedColumns: ["material_id"]
          },
          {
            foreignKeyName: "boxes_price_id_fkey"
            columns: ["price_id"]
            referencedRelation: "boxes_prices"
            referencedColumns: ["price_id"]
          },
          {
            foreignKeyName: "boxes_size_id_fkey"
            columns: ["size_id"]
            referencedRelation: "boxes_sizes"
            referencedColumns: ["size_id"]
          }
        ]
      }
      boxes_batches: {
        Row: {
          batch_id: number
          manufacturer: string
          order_number: string | null
          received_on: string
        }
        Insert: {
          batch_id?: number
          manufacturer: string
          order_number?: string | null
          received_on: string
        }
        Update: {
          batch_id?: number
          manufacturer?: string
          order_number?: string | null
          received_on?: string
        }
        Relationships: []
      }
      boxes_designs: {
        Row: {
          color: string
          design_id: number
          name: string
        }
        Insert: {
          color: string
          design_id?: number
          name: string
        }
        Update: {
          color?: string
          design_id?: number
          name?: string
        }
        Relationships: []
      }
      boxes_materials: {
        Row: {
          material_id: number
          recycled_material: boolean
        }
        Insert: {
          material_id?: number
          recycled_material?: boolean
        }
        Update: {
          material_id?: number
          recycled_material?: boolean
        }
        Relationships: []
      }
      boxes_prices: {
        Row: {
          price: number
          price_id: number
        }
        Insert: {
          price: number
          price_id?: number
        }
        Update: {
          price?: number
          price_id?: number
        }
        Relationships: []
      }
      boxes_sizes: {
        Row: {
          boox_sku: string | null
          depth: number
          height: number
          max_weight: number
          size_id: number
          weight: number
          width: number
        }
        Insert: {
          boox_sku?: string | null
          depth?: number
          height?: number
          max_weight?: number
          size_id?: number
          weight?: number
          width?: number
        }
        Update: {
          boox_sku?: string | null
          depth?: number
          height?: number
          max_weight?: number
          size_id?: number
          weight?: number
          width?: number
        }
        Relationships: []
      }
      landingpage_validation: {
        Row: {
          created_at: string | null
          id: number
          mail: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          mail?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          mail?: string | null
        }
        Relationships: []
      }
      loops: {
        Row: {
          box_id: number
          loop_id: number
          order_id: number | null
          return_location_id: number | null
        }
        Insert: {
          box_id: number
          loop_id?: number
          order_id?: number | null
          return_location_id?: number | null
        }
        Update: {
          box_id?: number
          loop_id?: number
          order_id?: number | null
          return_location_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "loops_box_id_fkey"
            columns: ["box_id"]
            referencedRelation: "boxes"
            referencedColumns: ["box_id"]
          },
          {
            foreignKeyName: "loops_order_id_fkey"
            columns: ["order_id"]
            referencedRelation: "retailers_orders"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "loops_return_location_id_fkey"
            columns: ["return_location_id"]
            referencedRelation: "por_locations"
            referencedColumns: ["location_id"]
          }
        ]
      }
      loops_pairings: {
        Row: {
          bank_account_number: string
          bank_account_prefix: string | null
          bank_code: string
          created_at: string | null
          email: string
          loop_id: number
          pairing_id: number
        }
        Insert: {
          bank_account_number: string
          bank_account_prefix?: string | null
          bank_code: string
          created_at?: string | null
          email: string
          loop_id: number
          pairing_id?: number
        }
        Update: {
          bank_account_number?: string
          bank_account_prefix?: string | null
          bank_code?: string
          created_at?: string | null
          email?: string
          loop_id?: number
          pairing_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "loops_pairings_loop_id_fkey"
            columns: ["loop_id"]
            referencedRelation: "loops"
            referencedColumns: ["loop_id"]
          }
        ]
      }
      loops_updates: {
        Row: {
          change_id: number
          loop_id: number
          timestamp: string
          update_type: number
        }
        Insert: {
          change_id?: number
          loop_id: number
          timestamp?: string
          update_type: number
        }
        Update: {
          change_id?: number
          loop_id?: number
          timestamp?: string
          update_type?: number
        }
        Relationships: [
          {
            foreignKeyName: "loops_updates_loop_id_fkey"
            columns: ["loop_id"]
            referencedRelation: "loops"
            referencedColumns: ["loop_id"]
          },
          {
            foreignKeyName: "loops_updates_update_type_fkey"
            columns: ["update_type"]
            referencedRelation: "loops_updates_types"
            referencedColumns: ["code"]
          }
        ]
      }
      loops_updates_types: {
        Row: {
          code: number
          description: string
        }
        Insert: {
          code?: number
          description: string
        }
        Update: {
          code?: number
          description?: string
        }
        Relationships: []
      }
      palletes: {
        Row: {
          boxes: number[] | null
          count: number | null
          pallete_id: number
          status: number
        }
        Insert: {
          boxes?: number[] | null
          count?: number | null
          pallete_id?: number
          status?: number
        }
        Update: {
          boxes?: number[] | null
          count?: number | null
          pallete_id?: number
          status?: number
        }
        Relationships: [
          {
            foreignKeyName: "palletes_status_fkey"
            columns: ["status"]
            referencedRelation: "palletes_statuses"
            referencedColumns: ["status_id"]
          }
        ]
      }
      palletes_statuses: {
        Row: {
          description: string
          status_id: number
        }
        Insert: {
          description: string
          status_id?: number
        }
        Update: {
          description?: string
          status_id?: number
        }
        Relationships: []
      }
      partner_companies: {
        Row: {
          brand_name: string
          company_id: number
          dic: number | null
          ico: number | null
          joined_on: string
          left_on: string | null
          legal_name: string
          logo_url: string | null
        }
        Insert: {
          brand_name?: string
          company_id?: number
          dic?: number | null
          ico?: number | null
          joined_on?: string
          left_on?: string | null
          legal_name?: string
          logo_url?: string | null
        }
        Update: {
          brand_name?: string
          company_id?: number
          dic?: number | null
          ico?: number | null
          joined_on?: string
          left_on?: string | null
          legal_name?: string
          logo_url?: string | null
        }
        Relationships: []
      }
      por_employees: {
        Row: {
          id: string
          location_id: number | null
          name: string | null
        }
        Insert: {
          id: string
          location_id?: number | null
          name?: string | null
        }
        Update: {
          id?: string
          location_id?: number | null
          name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "por_employees_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "por_employees_location_id_fkey"
            columns: ["location_id"]
            referencedRelation: "por_locations"
            referencedColumns: ["location_id"]
          }
        ]
      }
      por_locations: {
        Row: {
          city: string
          city_district: string | null
          closed_at: string | null
          country: string
          created_at: string
          district: string
          house_number: number
          location_id: number
          official_url: string | null
          partner_company_id: number
          phone: string | null
          point_location: unknown | null
          region: string
          street: string
          street_number: number
          zip: number
        }
        Insert: {
          city?: string
          city_district?: string | null
          closed_at?: string | null
          country?: string
          created_at?: string
          district?: string
          house_number?: number
          location_id?: number
          official_url?: string | null
          partner_company_id: number
          phone?: string | null
          point_location?: unknown | null
          region?: string
          street?: string
          street_number?: number
          zip?: number
        }
        Update: {
          city?: string
          city_district?: string | null
          closed_at?: string | null
          country?: string
          created_at?: string
          district?: string
          house_number?: number
          location_id?: number
          official_url?: string | null
          partner_company_id?: number
          phone?: string | null
          point_location?: unknown | null
          region?: string
          street?: string
          street_number?: number
          zip?: number
        }
        Relationships: [
          {
            foreignKeyName: "por_locations_partner_company_id_fkey"
            columns: ["partner_company_id"]
            referencedRelation: "partner_companies"
            referencedColumns: ["company_id"]
          }
        ]
      }
      por_opening_hours: {
        Row: {
          close_time: string
          end_day: number
          location_id: number
          open_time: string
          start_day: number
        }
        Insert: {
          close_time: string
          end_day?: number
          location_id: number
          open_time: string
          start_day: number
        }
        Update: {
          close_time?: string
          end_day?: number
          location_id?: number
          open_time?: string
          start_day?: number
        }
        Relationships: [
          {
            foreignKeyName: "por_opening_hours_location_id_fkey"
            columns: ["location_id"]
            referencedRelation: "por_locations"
            referencedColumns: ["location_id"]
          }
        ]
      }
      por_returns: {
        Row: {
          cash_paid: number | null
          created_at: string
          location_id: number
          loop_id: number
        }
        Insert: {
          cash_paid?: number | null
          created_at?: string
          location_id: number
          loop_id?: number
        }
        Update: {
          cash_paid?: number | null
          created_at?: string
          location_id?: number
          loop_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "por_returns_location_id_fkey"
            columns: ["location_id"]
            referencedRelation: "por_locations"
            referencedColumns: ["location_id"]
          }
        ]
      }
      retailers: {
        Row: {
          address: string
          brand_name: string
          city: string
          dic: number | null
          favicon_url: string
          ico: number | null
          joined_on: string
          left_on: string | null
          legal_name: string
          retailer_id: number
          zip: number
        }
        Insert: {
          address?: string
          brand_name: string
          city?: string
          dic?: number | null
          favicon_url: string
          ico?: number | null
          joined_on: string
          left_on?: string | null
          legal_name: string
          retailer_id?: number
          zip?: number
        }
        Update: {
          address?: string
          brand_name?: string
          city?: string
          dic?: number | null
          favicon_url?: string
          ico?: number | null
          joined_on?: string
          left_on?: string | null
          legal_name?: string
          retailer_id?: number
          zip?: number
        }
        Relationships: []
      }
      retailers_orders: {
        Row: {
          created_at: string
          invoice_number: number
          issue_date: string
          maturity_date: string
          order_id: number
          products: Json
          retailer_id: number
          status_id: number | null
          taxable_date: string | null
          total_price: number
        }
        Insert: {
          created_at?: string
          invoice_number: number
          issue_date?: string
          maturity_date?: string
          order_id?: number
          products: Json
          retailer_id: number
          status_id?: number | null
          taxable_date?: string | null
          total_price: number
        }
        Update: {
          created_at?: string
          invoice_number?: number
          issue_date?: string
          maturity_date?: string
          order_id?: number
          products?: Json
          retailer_id?: number
          status_id?: number | null
          taxable_date?: string | null
          total_price?: number
        }
        Relationships: [
          {
            foreignKeyName: "retailers_orders_retailer_id_fkey"
            columns: ["retailer_id"]
            referencedRelation: "retailers"
            referencedColumns: ["retailer_id"]
          },
          {
            foreignKeyName: "retailers_orders_status_id_fkey"
            columns: ["status_id"]
            referencedRelation: "retailers_orders_statuses"
            referencedColumns: ["id"]
          }
        ]
      }
      retailers_orders_statuses: {
        Row: {
          description: string
          id: number
        }
        Insert: {
          description: string
          id?: number
        }
        Update: {
          description?: string
          id?: number
        }
        Relationships: []
      }
      retailers_warehouses: {
        Row: {
          address_id: number
          city: string
          city_district: string | null
          country: string
          district: string
          email: string
          house_number: number
          phone: string
          region: string
          retailer_id: number | null
          street: string
          street_number: number
          zip: number
        }
        Insert: {
          address_id?: number
          city: string
          city_district?: string | null
          country?: string
          district?: string
          email?: string
          house_number: number
          phone?: string
          region: string
          retailer_id?: number | null
          street: string
          street_number: number
          zip: number
        }
        Update: {
          address_id?: number
          city?: string
          city_district?: string | null
          country?: string
          district?: string
          email?: string
          house_number?: number
          phone?: string
          region?: string
          retailer_id?: number | null
          street?: string
          street_number?: number
          zip?: number
        }
        Relationships: [
          {
            foreignKeyName: "retailers_warehouses_retailer_id_fkey"
            columns: ["retailer_id"]
            referencedRelation: "retailers"
            referencedColumns: ["retailer_id"]
          }
        ]
      }
      words: {
        Row: {
          frequency: number
          length: number
          max_frequency: number | null
          word: string
          word_id: number
        }
        Insert: {
          frequency?: number
          length: number
          max_frequency?: number | null
          word: string
          word_id?: number
        }
        Update: {
          frequency?: number
          length?: number
          max_frequency?: number | null
          word?: string
          word_id?: number
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      generate_padded_word: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      get_retailer: {
        Args: {
          tracking_name: string
        }
        Returns: {
          brand: string
          favicon: string
        }[]
      }
      landingpagesignup: {
        Args: {
          usermail: string
        }
        Returns: undefined
      }
      por_in_view: {
        Args: {
          min_lat: number
          min_long: number
          max_lat: number
          max_long: number
        }
        Returns: {
          location_id: number
          lng: number
          lat: number
          partner_id: number
          official_url: string
          brand_name: string
          city: string
          zip: number
          street: string
          house_number: number
          street_number: number
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
