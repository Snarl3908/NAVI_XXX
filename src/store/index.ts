import { atom } from 'nanostores';
import { logger } from '@/lib/logger';

export const searchKeyword = atom('');
export const filteredTags = atom<string[]>([]);

// 添加重置函数
export const resetFilters = () => {
  logger.log('Resetting filters');
  searchKeyword.set('');
  filteredTags.set([]);
};

// 添加监听器和状态同步
searchKeyword.listen((value) => {
  logger.log('searchKeyword changed:', value);
});

filteredTags.listen((value) => {
  logger.log('filteredTags changed:', value);
}); 