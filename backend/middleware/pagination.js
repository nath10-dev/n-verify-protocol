// Pagination middleware and helpers
const pagination = {
  // Default options
  defaultLimit: 20,
  maxLimit: 100,

  // Parse pagination params
  parseParams(req) {
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.min(
      this.maxLimit,
      Math.max(1, parseInt(req.query.limit) || this.defaultLimit)
    );
    const offset = (page - 1) * limit;
    
    return { page, limit, offset };
  },

  // Build meta response
  buildMeta(page, limit, total) {
    const totalPages = Math.ceil(total / limit);
    return {
      pagination: {
        page,
        limit,
        total,
        totalPages,
        hasNext: page < totalPages,
        hasPrev: page > 1
      }
    };
  },

  // Parse sort params
  parseSort(req) {
    const sortBy = req.query.sortBy || 'createdAt';
    const sortOrder = req.query.sortOrder === 'asc' ? 'asc' : 'desc';
    return { sortBy, sortOrder };
  },

  // Parse filter params
  parseFilters(req) {
    const filters = {};
    
    if (req.query.domain) {
      filters.domain = req.query.domain;
    }
    if (req.query.score) {
      filters.reliabilityScore = req.query.score;
    }
    if (req.query.startDate) {
      filters.startDate = new Date(req.query.startDate);
    }
    if (req.query.endDate) {
      filters.endDate = new Date(req.query.endDate);
    }
    
    return filters;
  }
};

module.exports = pagination;